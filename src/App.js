import React, { useState, useEffect } from "react";
import Container from "./Components/Container";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search/Search";
import API from "./utils/API";
import "./App.scss";

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    currentPage: 1,
    resultsPerPage: 10
  });
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    API.fetchRestaurants().then(res => {
      res.sort((a, b) => (a.name > b.name) ? 1 : -1);
      setRestaurants(res);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const searchAllRegex = searchValue && new RegExp(`${searchValue}`, "gi");
    const result = restaurants.filter(
      restaurant =>
        (!searchAllRegex || searchAllRegex.test(restaurant.name) + searchAllRegex.test(restaurant.city) + searchAllRegex.test(restaurant.genre))
    );
    setFilteredRestaurants(result);
  }, [searchValue, restaurants]);


  return (
    <Container>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Pagination
        data={filteredRestaurants}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}

export default App;
