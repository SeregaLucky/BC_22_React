import React from "react";
import { withRouter, Link } from "react-router-dom";

const ProductList = ({ productsList, ...props }) => {
  console.log("ProductList", props);
  return (
    <>
      <h3>ProductList</h3>

      {productsList.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${props.match.url}/${id}`}>{title}</Link>
        </li>
      ))}
    </>
  );
};

export default withRouter(ProductList);
