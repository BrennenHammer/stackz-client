import styled from "styled-components";
import { useState } from "react";

const AddItemPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, price, description, image };
    console.log(item);
    // Add logic to save the item to your database or state
  };

  return (
    <AddItemContainer>
      <h1>Add Item</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Name:</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Price:</Label>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Description:</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Image URL:</Label>
          <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </InputGroup>
        <Button type="submit">Add Item</Button>
      </Form>
    </AddItemContainer>
  );
};

const AddItemContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  margin-top: 100px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 95%;
  height: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color:rgb(0, 0, 0);
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default AddItemPage;