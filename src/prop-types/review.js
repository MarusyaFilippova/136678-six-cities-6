import PropTypes from 'prop-types';

export const reviewPropTypes = {
  reviewId: PropTypes.number.isRequired,
  reviewDate: PropTypes.string.isRequired,
  userInfo: PropTypes.shape({
    userAvatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }),
  reviewText: PropTypes.string.isRequired,
  reviewRating: PropTypes.number.isRequired,
};
