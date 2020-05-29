import React from 'react';
import Datacell from "./Datacell";

const Table = ({ data }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Phone Number</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {data ? (
                    data.map((restaurant, i) => {
                        return (
                            <Datacell
                                key={i}
                                data={restaurant}
                            />
                        )
                    })
                ) : (
                        <tr>
                            <td>Loading Restaurants</td>
                        </tr>
                    )}
            </tbody>
        </table>
    );
}

export default Table;