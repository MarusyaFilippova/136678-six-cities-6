import PropTypes from 'prop-types';

export const placeCardPropTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
