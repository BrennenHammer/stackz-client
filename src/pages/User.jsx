// ProfilePage.js
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ProfilePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items for the current user from the API
    fetch('/api/items/user')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ProfilePage;