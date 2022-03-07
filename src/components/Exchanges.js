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
  const [loading, setLoading] = useState(false);
  const [exchangesPerPage, setExchangesPerPage] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchExchanges = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    fetchExchanges();
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
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledExchanges>
      <div className="heading">
        <div className="text">
          <h3>Crypto Exchange directory</h3>
          <p> A list of various crypto exchanges from coingecko</p>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={event => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      {!exchangesPerPage ? (
        "No data found"
      ) : (
        <div className="table-container">
          <table className="table responsive" id="container">
            <thead>
              <tr className="table-light">
                <th>Name</th>
                <th>Country</th>
                <th>URL</th>
                <th>Logo</th>
                <th>Trust Rank</th>
              </tr>
            </thead>
            <tbody>
              {exchangesPerPage
                .filter(exchange => {
                  if (searchTerm == "") {
                    return exchange;
                  } else if (
                    exchange.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return exchange;
                  }
                })
                .map((exchange, index) => (
                  <tr key={exchange.id}>
                    <td className="table-dark">
                      <Link to={`/details/${exchange.id}`}>
                        {exchange.name}
                      </Link>
                    </td>
                    <td className="table-dark">{exchange.country}</td>
                    <td className="table-dark">{exchange.url}</td>
                    <td className="table-dark">
                      <img className="logo-img" src={exchange.image} />
                    </td>
                    <td className="center table-dark">
                      {exchange.trust_score_rank}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
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
