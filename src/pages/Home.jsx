import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../components/Item";

const Home = () => {
  const [tags, setTags] = useState([
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "Toys",
    "Books",
    "Music",
    "Decoration",
    "Clothing",
    "Art",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [items, setItems] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorizedItems = tags.map((tag) => {
    return {
      tag,
      items: items.filter((item) => item.category === tag),
    };
  }).filter(category => category.items.length > 0);

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
        <Search placeholder="Search items" />
        {categorizedItems.map((category) => (
          <div key={category.tag}>
            <h2>{category.tag}</h2>
            {category.items.map((item) => (
              <Item
              key={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
            
            ))}
          </div>
        ))}
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
  border-radius: 9999px;
  width: 140px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CategoryContainer = styled.div`
  width: 150px;
  @media (max-width: 750px){
  width: 60%;
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
  @media (max-width: 750px){
  margin-left: -50px;
  }
`;

const MiddleSearchDiv = styled.div`
  padding: 19px;
  margin-left: 25%;
  flex-grow: 1;
  @media (max-width: 750px){
  margin-left: 2.5%;
  }
`;

export default Home;