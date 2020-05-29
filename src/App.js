import React, { useState, useEffect } from "react";
import Container from "./Components/Container";
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination";
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

  useEffect(() => {
    API.fetchRestaurants().then(res => {
      setRestaurants(res);
      setIsLoaded(true);
    });
  }, []);


  return (
    <Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Table
        data={restaurants}
      />
    </Container>
  );
}

export default App;
