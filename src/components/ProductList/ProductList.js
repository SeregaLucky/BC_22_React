import React from "react";
import { withRouter, Link } from "react-router-dom";

const ProductList = ({ productsList, ...props }) => {
  // console.log("ProductList", props);
  const { location } = props;

  return (
    <>
      <h3>ProductList</h3>

      {productsList.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${props.match.url}/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default withRouter(ProductList);
// export default ProductList;
