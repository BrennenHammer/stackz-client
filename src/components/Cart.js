import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
`;

const CartDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  display: none;
  ${CartContainer}:hover & {
    display: block;
  }
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`/cart/${userId}`)
      .then(response => {
        setCartItems(response.data);
        setCartCount(response.data.length);
      })
      .catch(error => console.error(error));
  }, []);

  const addItemToCart = async (productId) => {
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
    <CartContainer>
      <span>Cart</span>
      <CartCount>{cartCount}</CartCount>
      <CartDropdown>
        {cartItems.map(item => (
          <div key={item.productId._id}>{item.productId.name}</div>
        ))}
      </CartDropdown>
    </CartContainer>
  );
};

export default Cart;