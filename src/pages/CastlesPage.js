import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';
import './ListingsPage.css';

const CastlesPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');
      const data = await response.json();
      const castles = data.filter((listing) => listing.name.includes('Executive'));
      setListings(castles);
    };

    fetchData();
  }, []);

  return (
    <div className="listings-container">
      <div className="listings-grid">
        {listings.map((listing) => (
          <Listing key={listing.id} data={listing} />
        ))}
      </div>
    </div>
  );
};

export default CastlesPage;
