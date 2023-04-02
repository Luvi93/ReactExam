import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';
import './ListingsPage.css';

const TinyHomesPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');
      const data = await response.json();
      //JSON response'as neturi kategoriju, custom filtras good enough
      const tinyHomes = data.filter((listing) => listing.name.toLowerCase().includes('family'));

      setListings(tinyHomes);
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

export default TinyHomesPage;
