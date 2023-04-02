import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListingDetailsPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');
      const data = await response.json();
      const fetchedListing = data.find((item) => item.id === parseInt(id, 10));
      setListing(fetchedListing);
    };

    fetchData();
  }, [id]);

  if (!listing) {
    return <p>Loading...</p>;
  }

  const {
    name,
    imageUrl,
    price,
    priceCurrency,
    lat,
    lng
  } = listing;

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>
        Location: Latitude: {lat}, Longitude: {lng}
      </p>
      <p>
        Price: {priceCurrency} {price}
      </p>
    </div>
  );
};

export default ListingDetailsPage;
