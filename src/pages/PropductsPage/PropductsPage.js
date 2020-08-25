import React, { Component } from "react";
import { getIdProduct } from "../../api";
import withRandomNumber from "../../hoc/withRandomNumber";

class PropductsPage extends Component {
  state = { product: null };

  async componentDidMount() {
    // console.log("PropductsPage PROPS", this.props);
    const { id } = this.props.match.params;
    // return;
    const { data: product } = await getIdProduct(id);
    // console.log(product);
    this.setState({ product });
  }

  goBack = () => {
    console.log(this.props);
    const { history, location } = this.props;

    // if (location.state && location.state.from) {
    //   history.push(location.state.from);
    // }
    // location.state?.from?.fdfds?.fddfdsf

    if (location.state?.from) {
      history.push(location.state.from);
      return;
    }

    history.push("/home");
  };

  render() {
    const { product } = this.state;
    const { randomNumber } = this.props;

    return (
      <>
        <button type="button" onClick={this.goBack}>
          Go back
        </button>

        <p>RandomNumber: {randomNumber}</p>

        {product && (
          <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        )}
      </>
    );
  }
}

export default withRandomNumber(PropductsPage);
// export default PropductsPage;
