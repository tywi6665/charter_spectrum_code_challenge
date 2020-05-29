import React, { useState, useEffect } from 'react';

const Pagination = ({ data, currentPage, setCurrentPage }) => {

    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        const arr = [];
        for (let i = 1; i <= Math.ceil(data.length / currentPage.resultsPerPage); i++) {
            arr.push(i);
        }
        setPageNumbers(arr)
    }, [data]);

    const handleClick = (e) => {
        setCurrentPage({
            ...currentPage,
            currentPage: Number(e.target.id)
        });
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => {
                    return (
                        <li
                            key={number}
                            id={number}
                            onClick={handleClick}
                        >
                            {number}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Pagination;