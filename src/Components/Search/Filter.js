import React from "react";

const Filter = ({
    genres,
    states
}) => {

    return (
        <div>
            <div>
                <label>Filter by Genre: </label>
                <select>
                    <option value="-All-">-All-</option>
                </select>
                <label>Filter by State: </label>
                <select>
                    <option value="-All-">-All-</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
