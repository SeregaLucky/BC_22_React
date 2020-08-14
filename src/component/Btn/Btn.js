import React from "react";

const Btn = ({ type, name, onClick }) => {
  const clickBtn = () => onClick(name);

  return (
    <button type={type} name={name} onClick={clickBtn}>
      {name}
    </button>
  );
};

export default Btn;
