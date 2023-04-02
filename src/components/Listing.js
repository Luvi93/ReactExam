import React from 'react';
import { Link } from 'react-router-dom';
import './Listing.css';

const Listing = ({ data }) => {
  const {
    id,
    name,
    imageUrl,
    price,
    priceCurrency,
    lat,
    lng
  } = data;

  return (
    <div className="listing-card" key={id}>
      <Link to={`/listing/${id}`} className="listing-link">
        <div className="listing-image-container">
          <img className="listing-image" src={imageUrl} alt={name} />
        </div>
        <div className="listing-details">
          <h3 className="listing-name">{name}</h3>
          <p className="listing-location">
            Location: Latitude: {lat}, Longitude: {lng}
          </p>
          <p className="listing-price">
            Price: {priceCurrency} {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Listing;
