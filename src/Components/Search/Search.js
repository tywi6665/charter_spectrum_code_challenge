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
        <form>
            <input
                placeholder="Search"
                State="text"
                value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <Filter
                genres={genres}
                filterGenre={filterGenre}
                setFilterByGenre={setFilterByGenre}
                states={states}
                filterByState={filterByState}
                setFilterByState={setFilterByState}
            />
            <button onClick={clearFilter}>clear</button>
        </form>
    );
}

export default Search;