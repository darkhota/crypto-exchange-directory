import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { StyledDetails } from "../styles/details.styles";

const Details = props => {
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
          <img src="/back.jpg" alt="bk" />
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
            <img src={details.image} alt="" />
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
        <div className="flex-group">
          <h3>Name:</h3>
          <h3>{details.name}</h3>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;
