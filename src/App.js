import React, { useState, useEffect } from "react";
import Container from "./Components/Container";
import API from "./utils/API";
import "./App.scss";

function App() {

  useEffect(() => {
    const data = API.fetchRestaurants();
    console.log(data);
  }, []);


  return (
    <Container>

    </Container>
  );
}

export default App;
