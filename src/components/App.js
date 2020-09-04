import React from 'react';

import Form from './Form';
import NamesList from './NamesList';
import { useSelector } from 'react-redux';
import { getLoading, getError } from '../redux/form/selectorsForm';

const App = () => {
  const loading = useSelector(state => getLoading(state));
  // const loading = useSelector(getLoading);

  // const error = useSelector(state => getError(state));
  const error = useSelector(getError);

  return (
    <>
      {loading && <h2>LOADING...</h2>}

      <Form />
      {!error && <NamesList />}
      {error && <h3>ERROR...</h3>}
    </>
  );
};

export default App;
