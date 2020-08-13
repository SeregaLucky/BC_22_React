import React from "react";
import Count from "./component/Count/Count";
import Count2 from "./component/Count2/Count2";

const App = () => {
  return (
    <>
      <Count startValue={10} step={5} />
      <br />
      <br />
      <br />
      <Count2 />
    </>
  );
};

export default App;
