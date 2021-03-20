import React from 'react';
import {reviewPropTypes} from '../../prop-types/review';
import {getRatingWidth} from '../../utils/utils';

const ReviewItem = (props) => {
  const {
    reviewDate,
    userInfo,
    reviewText,
    reviewRating,
  } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userInfo.userAvatar} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{userInfo.userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(reviewRating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{reviewText}</p>
        <time className="reviews__time" dateTime="2019-04-24">{reviewDate}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  ...reviewPropTypes
};

export default ReviewItem;


