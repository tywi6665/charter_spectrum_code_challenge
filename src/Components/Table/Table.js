import React from 'react';

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
                <tr>
                    <td>Loading Restaurants</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;