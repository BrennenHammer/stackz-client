// src/components/ItemGrid.js
import styled from "styled-components";

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export default ItemGrid;
