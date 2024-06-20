import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
    const navigate = useNavigate(); // Initialize useNavigate hook

    let active = page;
    let items = [];
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0];
    }
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === active}
                onClick={() => {
                    navigate(!isAdmin ? 
                        `/?keyword=${encodeURIComponent(keyword)}&page=${number}` :
                        `/admin/productlist/?keyword=${encodeURIComponent(keyword)}&page=${number}`
                    );
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <Pagination>{items}</Pagination>
    );
}

export default Paginate;
