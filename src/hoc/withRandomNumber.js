import React from "react";

const withRandomNumber = (Component) => {
  const randomNumber = Math.round(Math.random() * 10);
  console.log("randomNumber ==============", randomNumber);

  return function WithRandomNumber(props) {
    return <Component {...props} randomNumber={randomNumber} />;
  };
};

export default withRandomNumber;
