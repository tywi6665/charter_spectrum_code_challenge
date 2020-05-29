import React from "react";

const Search = ({ setSearchValue, searchValue, }) => {

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
            <button onClick={clearFilter}>clear</button>
        </form>
    );
}

export default Search;