import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../prop-types/review';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

const OfferReview = (props) => {
  const {
    reviews
  } = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <ReviewItem key={review.reviewId} {...review}/>
          );
        })}
      </ul>
      <ReviewForm />
    </section>
  );
};

OfferReview.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes)
  )
};

export default OfferReview;
