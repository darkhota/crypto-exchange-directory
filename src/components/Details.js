import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { StyledDetails } from "../styles/details.styles";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idty, setIdty] = useState(id);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      axios
        .get(`https://api.coingecko.com/api/v3/exchanges/${idty}`)
        .then(res => {
          setDetails(res.data);
        });
      setLoading(false);
    };

    fetchDetails();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <StyledDetails>
      <div className="back" id="container">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </Link>
      </div>

      <div className="header">
        <h2>{details.name} &nbsp;</h2>{" "}
        <span>
          <img src={details.image} alt="" />
        </span>
      </div>

      <div className="content">
        <div className="flex-group">
          <h3>Name:</h3>
          <h3>{details.name}</h3>
        </div>
        <div className="flex-group">
          <h3>Country:</h3>
          <h3>{details.country}</h3>
        </div>
        <div className="flex-group">
          <h3>Trust Rank:</h3>
          <h3>{details.trust_score_rank}</h3>
        </div>
        <div className="flex-group">
          <h3>Logo:</h3>
          <h3>
            <img src={details.image} alt="" className="logo-img" />
          </h3>
        </div>
        <div className="flex-group">
          <h3>Year of Establishment:</h3>
          <h3>{details.year_established}</h3>
        </div>
        <div className="flex-group">
          <h3>Description:</h3>
          <h3>{details.description}</h3>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
