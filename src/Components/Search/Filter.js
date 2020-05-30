import React from "react";

const Filter = ({
    genres,
    filterByGenre,
    setFilterByGenre,
    states,
    filterByState,
    setFilterByState
}) => {

    const handleFilterByGenreChange = e => {
        if (e.target.value === "All") {
            setFilterByGenre("")
        } else {
            setFilterByGenre(e.target.value);
        }
    };
    const handleFilterByStateChange = e => {
        if (e.target.value === "All") {
            setFilterByState("")
        } else {
            setFilterByState(e.target.value);
        }
    };

    return (
        <div>
            <div>
                <label>Genre : </label>
                <select defaultValue={filterByGenre} onChange={handleFilterByGenreChange}>
                    <option value="All">All</option>
                    {genres.length > 0 ? (
                        genres.map((genre, i) => {
                            return <option key={i} value={genre}>{genre}</option>
                        })
                    ) : (<option value="-Loading-">-Loading Genres-</option>)}
                </select>
                <label>State : </label>
                <select defaultValue={filterByState} onChange={handleFilterByStateChange}>
                    <option value="All">All</option>
                    {states.map((state, i) => {
                        return <option key={i} value={state}>{state}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

export default Filter;
