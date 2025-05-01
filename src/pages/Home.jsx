//import react from "react";
import styled from "styled-components"
const Home = () =>{


return(
    <HomeDiv>
    <SearchDiv>
        <Search></Search>
        <Search2></Search2>
    </SearchDiv>
    </HomeDiv>
)
}


export default Home

const Search = styled.button`
  height: 30px;
  border-radius: 9999px;
  width: 200px;
  margin-right: 10px; /* Add some space between the two elements */
`;
const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Optional: makes the div take up the full viewport height */
`;
const Search2 = styled.div`
  height: 30px;
  border-radius: 9999px;
  width: 200px;
`;