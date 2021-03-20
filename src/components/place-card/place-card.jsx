import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {placeCardPropTypes} from '../../prop-types/place-card';
import {getRatingWidth} from '../../utils/utils';


const PlaceCard = (props) => {
  const {
    id,
    image,
    title,
    price,
    type,
    isPremium,
    isFavorite,
    rating,
    onHover,
    onBookmarkToggle
  } = props;

  const bookmarkButtonClass = isFavorite
    ? `place-card__bookmark-button--active`
    : `place-card__bookmark-button`;

  const handleBookmarkToggle = (evt) => {
    evt.preventDefault();
    onBookmarkToggle(id);
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(-1)}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={image} width="260" height="200"
            alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${bookmarkButtonClass} button`} type="button" onClick={handleBookmarkToggle}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  ...placeCardPropTypes,
  onHover: PropTypes.func.isRequired,
  onBookmarkToggle: PropTypes.func.isRequired
};

export default PlaceCard;
