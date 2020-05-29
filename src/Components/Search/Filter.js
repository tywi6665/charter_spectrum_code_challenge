import React from "react";

const Filter = ({
    genres,
    filterByGenre,
    setFilterByGenre,
    states,
    filterByState,
    setFilterByState
}) => {

    return (
        <div>
            <div>
                <label>Filter by Genre: </label>
                <select>
                    <option value="-All-">-All-</option>
                    {genres.length > 0 ? (
                        genres.map((genre, i) => {
                            return <option key={i} value={genre}>{genre}</option>
                        })
                    ) : (<option value="-Loading-">-Loading Genres-</option>)}
                </select>
                <label>Filter by State: </label>
                <select>
                    <option value="-All-">-All-</option>
                    {states.map((state, i) => {
                        return <option key={i} value={state}>{state}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default Filter;
