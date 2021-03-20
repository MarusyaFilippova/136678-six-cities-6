import React, {useState} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';

import {placeCardPropTypes} from '../../prop-types/place-card';


const PlaceList = (props) => {
  const {
    places
  } = props;

  const [activeCard, setActiveCard] = useState(-1);

  return (
    <>
      <div>Active card: ${activeCard} </div>
      <div className="cities__places-list places__list tabs__content">

        {places.map((place) => (
          <PlaceCard key={place.id} {...place} onHover={setActiveCard} onBookmarkToggle={() => {}}/>
        ))}
      </div>
    </>

  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape(placeCardPropTypes),
  ),
};

export default PlaceList;
