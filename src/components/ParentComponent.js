import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Item from './Item';

const ParentComponent = () => {
  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`/cart/${userId}`)
      .then(response => {
        setCartItems(response.data);
        setCartCount(response.data.length);
      })
      .catch(error => console.error(error));

    // Fetch items
    axios.get('/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddToCart = async (productId) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.post('/add-to-cart', { userId, productId });
      setCartCount(cartCount + 1);
      const updatedCartItems = await axios.get(`/cart/${userId}`);
      setCartItems(updatedCartItems.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ParentComponent;