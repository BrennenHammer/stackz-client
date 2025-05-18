import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";
import ItemGrid from "../components/ItemGrid"; // Make sure this is correct

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [items, setItems] = useState([]);

  const tags = [
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "tools",
    "Toys",
    "Books",
    "Music",
    "Decoration",
    "Clothing",
    "Art",
  ];

  useEffect(() => {
    axios.get("/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeDiv>
      <LeftPanel>
        <Search2
          placeholder="Search categories"
          value={searchTerm}
          onChange={handleSearch}
        />
        <CategoryContainer>
          {filteredTags.slice(0, 4).map((tag, index) => (
            <Category key={index}>{tag}</Category>
          ))}
          {filteredTags.length > 4 && (
            <ShowMoreButton onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </ShowMoreButton>
          )}
          {showMore &&
            filteredTags.slice(4).map((tag, index) => (
              <Category key={index}>{tag}</Category>
            ))}
        </CategoryContainer>
      </LeftPanel>

      <VerticalLine />

      <MiddleSearchDiv>
  <ContentWrapper>
    <Search placeholder="Search items" />
    <ItemGrid>
      {items.map((item) => (
        <Item
          key={item._id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </ItemGrid>
  </ContentWrapper>
</MiddleSearchDiv>

    </HomeDiv>
  );
};

const HomeDiv = styled.div`
  display: flex;
  height: 100vh;
  margin-top: 100px;
  position: relative;
`;

const LeftPanel = styled.div`
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Search = styled.input`
  height: 16px;
  border-radius: 9999px;
  width: 220px;
  padding: 10px;
`;

const Search2 = styled.input`
  height: 9px;
  width: 140px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  @media (max-width: 750px) {
    width: 54.5%;
    font-size: 80%;
  }
     @media (max-width: 500px) {
    width: 70%;
    font-size: 70%;
    margin-left: -10px;
  }
`;

const CategoryContainer = styled.div`
  width: 150px;
  @media (max-width: 750px) {
    width: 65%;
  }
`;

const Category = styled.div`
  padding: 5px;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const ShowMoreButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 14px;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #ddd;
  height: 100vh;
  margin-left: -40px;
  @media (max-width: 750px) {
    margin-left: -50px;
  }
`;

const MiddleSearchDiv = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
`;


export default Home;
