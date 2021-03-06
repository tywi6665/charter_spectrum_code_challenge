import React, { useState, useEffect } from "react";
import Table from "./Table/Table";

const Pagination = ({ data, currentPage, setCurrentPage }) => {

    const [pageNumbers, setPageNumbers] = useState([])
    const [currentDataIndex, setCurrentDataIndex] = useState(null)

    useEffect(() => {
        const arr = [];
        for (let i = 1; i <= Math.ceil(data.length / currentPage.resultsPerPage); i++) {
            arr.push(i);
        }
        setPageNumbers(arr)
    }, [data, currentPage]);

    useEffect(() => {
        const lastDataIndex = currentPage.currentPage * currentPage.resultsPerPage;
        const firstDataIndex = lastDataIndex - currentPage.resultsPerPage;
        setCurrentDataIndex(data.slice(firstDataIndex, lastDataIndex));
    }, [data, currentPage]);

    const handleClick = e => {
        e.target.parentElement.querySelectorAll(".active").forEach(e =>
            e.classList.remove("active"));
        e.target.classList.add("active");
        setCurrentPage({
            ...currentPage,
            currentPage: Number(e.target.id)
        });
    }

    return (
        <div>
            <Table
                data={currentDataIndex}
            />
            <ul className="pagination_ul">
                {pageNumbers.map(number => {
                    return (
                        <li
                            className={number === 1 ? "active" : ""}
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