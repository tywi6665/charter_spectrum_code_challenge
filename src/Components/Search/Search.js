import React from "react";
import Filter from "./Filter";

const Search = ({
    setSearchValue,
    searchValue,
    genres,
    states
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
                states={states}
            />
            <button onClick={clearFilter}>clear</button>
        </form>
    );
}

export default Search;