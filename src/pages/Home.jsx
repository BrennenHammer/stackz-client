import styled from "styled-components";

const Home = () => {
  return (
    <HomeDiv>
      <SearchDiv>
        <Search2 placeholder="Search categories" />
      </SearchDiv>
      <MiddleSearchDiv>
        <Search placeholder="Search items" />
      </MiddleSearchDiv>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const SearchDiv = styled.div`
  position: absolute;
  top: 100px; /* Assuming navbar height is 80px */
  left: 20px;
`;

const MiddleSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px; /* Assuming navbar height is 80px */
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
`;