import React from "react";
import Filter from "./Filter";

const Search = ({
    setSearchValue,
    searchValue,
    genres,
    filterGenre,
    setFilterByGenre,
    states,
    filterByState,
    setFilterByState
}) => {

    const handleSearchInputChanges = e => {
        if (e.target.value === "") {
            setSearchValue("")
        } else {
            setSearchValue(e.target.value);
        }
    };

    const clearFilter = e => {
        setSearchValue("");
        setFilterByGenre("");
        setFilterByState("");
    };

    return (
        <div className="search">
            <h3>Search Bar</h3>
            <form>
                <label htmlFor="searchBar">General Search: </label>
                <input
                    placeholder="Search"
                    State="text"
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    name="searchBar"
                />
                <Filter
                    genres={genres}
                    filterGenre={filterGenre}
                    setFilterByGenre={setFilterByGenre}
                    states={states}
                    filterByState={filterByState}
                    setFilterByState={setFilterByState}
                />
                <button onClick={clearFilter}>Clear</button>
            </form>
        </div>
    );
}

export default Search;