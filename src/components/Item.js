import styled from "styled-components";

const Item = ({ id, name, price, description, image, onAddToCart }) => {
  return (
    <ItemContainer>
      <ItemImage src={`https://stackz-server.onrender.com/uploads/${image}`} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
        <AddToCartButton onClick={() => onAddToCart(id)}>🛒</AddToCartButton>
      </ItemDetails>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 10px 10px 5px 5px;
  &:hover {
    transform: scale(1.10);
  }
`;

const ItemDetails = styled.div`
  padding: 0px;
`;

const ItemName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: -5px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: -5px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: black;
`;

const AddToCartButton = styled.button`
  margin-top: 3px;
  font-size: 20px;
  color: white;
  border: 1px solid lightgrey;
  border-radius: 6px;
  height: 35px;
  width: 35px;
  margin-left: 80%;
  cursor: pointer;
  &:hover {
    background-color: rgb(54, 56, 58);
  }
`;

export default Item;