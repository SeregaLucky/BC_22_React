import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { getProducts } from "../../api";

class Products extends Component {
  state = { productsList: [] };

  async componentDidMount() {
    const { data: productsList } = await getProducts();
    console.log(productsList);
    this.setState({ productsList: productsList });
  }

  render() {
    const { productsList } = this.state;
    return (
      <>
        <h2>Products</h2>

        {/* <ProductList {...props} /> */}
        <ProductList productsList={productsList} />
      </>
    );
  }
}

export default Products;
