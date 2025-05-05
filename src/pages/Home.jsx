import styled from "styled-components";
import { useState } from "react";

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
        <Search placeholder="Search items" />
        {/* Items will go here */}
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
  padding: 20px;
  margin-left: 25%;
  flex-grow: 1;
  @media (max-width: 750px){
  margin-left: 2.5%;
  }
`;

export default Home;