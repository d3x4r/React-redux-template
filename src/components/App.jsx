import React from 'react';
import { connect } from 'react-redux';

const mapToStateProps = (state) => {
  const props = {
    firstData: state.data1,
    secondData: state.data2,
  };
  return props;
};

const App = () => <h1>Hello, world!</h1>;

export default connect(mapToStateProps)(App);
