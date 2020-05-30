import React, { useState, useEffect } from "react";
import Container from "./Components/Container";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search/Search";
import API from "./utils/API";
import "./App.scss";

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    currentPage: 1,
    resultsPerPage: 10
  });
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [genres, setGenres] = useState("");
  const [filterByGenre, setFilterByGenre] = useState("");
  const [filterByState, setFilterByState] = useState("");
  const states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];

  useEffect(() => {
    API.fetchRestaurants().then(res => {
      res.sort((a, b) => (a.name > b.name) ? 1 : -1);
      getGenres(res);
      setRestaurants(res);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const searchAllRegex = searchValue && new RegExp(`${searchValue}`, "gi");
    const genreRegex = filterByGenre && new RegExp(`${filterByGenre}`, "gi");
    const result = restaurants.filter(
      restaurant =>
        (!searchAllRegex || searchAllRegex.test(restaurant.name) + searchAllRegex.test(restaurant.city) + searchAllRegex.test(restaurant.genre)) &&
        (!genreRegex || genreRegex.test(restaurant.genre)) &&
        (!filterByState || restaurant.state === filterByState)
    );
    setFilteredRestaurants(result);
  }, [searchValue, restaurants, filterByGenre, filterByState]);

  const getGenres = (data) => {
    const genreList = []
    for (let i = 0; i < data.length; i++) {
      let subGenreList = data[i].genre.split(",");
      for (let j = 0; j < subGenreList.length; j++) {
        if (genreList.includes(subGenreList[j])) { }
        else {
          genreList.push(subGenreList[j])
        }
      }
    }
    genreList.sort((a, b) => (a > b) ? 1 : -1);
    setGenres(genreList)
  }

  return (
    <Container>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        genres={genres}
        filterByGenre={filterByGenre}
        setFilterByGenre={setFilterByGenre}
        states={states}
        filterByState={filterByState}
        setFilterByState={setFilterByState}
      />
      {filteredRestaurants.length > 0 ? (
        <Pagination
          data={filteredRestaurants}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
          <p>Sorry, No Results :(</p>
        )}
    </Container>
  );
}

export default App;
