import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const DashboardPagination = ({ count, page, perPage }) => {
  let totalPages = Math.ceil(count / perPage);
  let startLoop = page;
  let difference = totalPages - page;
  if (difference <= 4) {
    startLoop = totalPages - 4;
  }
  let endLoop = startLoop + 4;
  if (startLoop <= 0) {
    startLoop = 1;
  }
  const links = () => {
    const store = [];
    let active = 0;
    for (let number = startLoop; number <= endLoop; number++) {
      store.push(
        
          <Pagination.Item  key={number} active={number === active} >
              <Link className="link" to={`/dashboard/${number}`}>{number}</Link>
          </Pagination.Item>
      );
    }
    return store;
  };
  return (
      <Pagination  className="pagination">{links()}</Pagination>
  );
};

export default DashboardPagination;
