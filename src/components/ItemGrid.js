// src/components/ItemGrid.jsx
import styled from "styled-components";

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 10px;
`;

export default ItemGrid;
