import React, { useState, useRef, useEffect } from 'react';
import shortid from 'shortid';

const FormPage = () => {
  /* STATE */
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);

  /* IDX */
  const idxLoginInput = useRef(shortid.generate());
  const idxPasswordInput = useRef(shortid.generate());
  console.log(idxLoginInput);
  // idxLoginInput.current = shortid.generate();

  useEffect(() => {
    // console.log('useEffect');
    // idxLoginInput.current = shortid.generate();
    // idxPasswordInput.current = shortid.generate();
    // console.log(idxLoginInput);
    // return () => {
    //   console.log('WillUnMount');
    // };
  }, []);

  // useEffect(() => {
  //   console.log('useEffect DidUpdate');

  //   return () => {
  //     console.log('return');
  //   };
  // });

  // useEffect(() => {
  //   console.log('useEffect DidUpdate TOGGLE');

  //   return () => {
  //     console.log('return  TOGGLE');
  //   };
  // }, [toggle]);

  /* CHANGE VALUE */
  const changeLogin = e => setLogin(e.target.value);
  const changePassword = e => setPassword(e.target.value);

  const handleChangeClick = () => setToggle(prevToggle => !prevToggle);

  return (
    <>
      <button type="button" onClick={handleChangeClick}>
        Change
      </button>

      {toggle && <p>AAAAAAAAAAAAA</p>}

      <form>
        {/* {console.log(111, idxLoginInput)} */}
        <label htmlFor={idxLoginInput.current}>
          <span>Login</span>
          <input
            type="text"
            placeholder="Login"
            id={idxLoginInput.current}
            value={login}
            onChange={changeLogin}
          />
        </label>

        <label htmlFor={idxPasswordInput.current}>
          <span>Password</span>
          <input
            type="text"
            placeholder="Password"
            id={idxPasswordInput.current}
            value={password}
            onChange={changePassword}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default FormPage;
