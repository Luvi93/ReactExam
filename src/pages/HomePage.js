import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';
import './HomePage.css';

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');
      const data = await response.json();
      setListings(data.slice(0, 6));
    };

    fetchData();
  }, []);

  return (
    <div className="listings-grid">
      {listings.map((listing) => (
        <Listing key={listing.id} data={listing} />
      ))}
    </div>
  );
};

export default HomePage;
