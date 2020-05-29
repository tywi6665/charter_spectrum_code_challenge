import React from 'react';

const Datacell = ({ data }) => {
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.city}</td>
            <td>{data.state}</td>
            <td>{data.telephone}</td>
            <td>{data.genre}</td>
        </tr>
    );
}

export default Datacell;