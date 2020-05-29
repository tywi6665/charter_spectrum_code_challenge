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

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    );
}

export default Pagination;