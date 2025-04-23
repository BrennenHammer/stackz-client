import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar'
//import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

<Navbar>

</Navbar>
      
      
      <SearchDiv></SearchDiv>
      <Search></Search>

    </div>
  );
}

export default App;

;

const Search = styled.button`
margin-top: 120px;
height: 30px;
border-radius: 9999px;
width: 200px;
`
const SearchDiv = styled.div`

`