import styled from "styled-components";

export const StyledExchanges = styled.div`
  padding: 2rem;
  background-color: black;
  color: #fff;

  h3,
  p {
  }

  .center {
    text-align: center;
  }

  a {
    color: #fff !important;
  }

  a:hover {
    text-decoration: underline;
  }

  .page-link {
    color: #000;
  }
  .page-item.active .page-link {
    color: #fff !important;
    background-color: #212529 !important;
    border: none;
  }

  .logo-img {
    border-radius: 50%;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .table-container {
    background-color: #212529;
    padding: 2rem;
  }

  .pagination {
    cursor: pointer;
  }

  .search input {
    border-radius: 5px;
    padding: 0.3rem;
    padding-left: 10px;
  }
`;
