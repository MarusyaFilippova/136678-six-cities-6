import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {places} = props;

  return (
    <MainPage places={ places } />
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      }).isRequired,
  )
};

export default App;
