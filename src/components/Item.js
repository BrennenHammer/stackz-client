import styled from "styled-components";

const Item = ({ name, price, description, image }) => {
  return (
    <ItemContainer>
      <ItemImage src={image} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
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
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ItemDetails = styled.div`
  padding: 10px;
`;

const ItemName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: #999;
`;

export default Item;