import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const AddItemPage = () => {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState('');
  const [seller, setSeller] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
  formData.append('price', price);
  formData.append('category', category);
  formData.append('seller', seller);
  formData.append('description', description);
  formData.append('image', image);

    axios.post('/api/items', formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error:', error.response.data);
      console.error('Status:', error.response.status);
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <AddItemContainer>
      <h1>Add Item</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Title:</Label>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
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
          <Label>Image:</Label>
          <Input type="file" onChange={handleImageChange} />
        </InputGroup>
        <InputGroup>
          <Label>Category:</Label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Sports">Sports</option>
            <option value="Toys">Toys</option>
            <option value="Books">Books</option>
            <option value="Music">Music</option>
            <option value="Decoration">Decoration</option>
            <option value="Clothing">Clothing</option>
            <option value="Art">Art</option>
          </select>
        </InputGroup>
        <InputGroup>
          <Label>Seller:</Label>
          <Input type="text" value={seller} onChange={(e) => setSeller(e.target.value)} />
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