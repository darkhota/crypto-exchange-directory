import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import { Link } from "react-router-dom";
import { StyledExchanges } from "../styles/exchanges.styles";

// set default size of exchanges displayed per page
const pageSize = 10;

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [exchangesPerPage, setExchangesPerPage] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/exchanges").then(res => {
      console.log(res.data);
      setExchanges(res.data);

      //   slice data into 10 each(pageSize)
      setExchangesPerPage(
        _(res.data)
          .slice(0)
          .take(pageSize)
          .value()
      );
    });
  }, []);

  //   calculate how many pages would be available based on fetched data and pageSize
  const pageCount = exchanges ? Math.ceil(exchanges.length / pageSize) : 0;

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const pagination = pageNo => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const exchangesPage = _(exchanges)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setExchangesPerPage(exchangesPage);
  };

  return (
    <StyledExchanges>
      {!exchangesPerPage ? (
        "No data found"
      ) : (
        <table className="table responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>URL</th>
              <th>Logo</th>
              <th>Trust Rank</th>
            </tr>
          </thead>
          <tbody>
            {exchangesPerPage.map((exchange, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/details/${exchange.id}`}>{exchange.name}</Link>
                </td>
                <td>{exchange.country}</td>
                <td>{exchange.url}</td>
                <td>
                  <img src={exchange.image} />
                </td>
                <td className="center">{exchange.trust_score_rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map(page => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page.id}
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </StyledExchanges>
  );
};

export default Exchanges;
