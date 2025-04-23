import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <NavBar>
            <Pcontainer>
      <P1>Stackz</P1>
      <P2>Stackz</P2>
      <P3>Stackz</P3>
      <P4>Stackz</P4>
      <P5>Stackz</P5>
      </Pcontainer>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>&#9776;</Hamburger>
       <Menu>
            <Links>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/addItems">Add Item</StyledLink>
            <StyledLink to="/user">Profile</StyledLink>
            <StyledLink to="/cart">Your Cart</StyledLink>
            </Links>
            </Menu>
        </NavBar>

    )
  
}
export default Navbar;

const NavBar = styled.div`
  position: fixed;
  top: 5%;
  left: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(26, 36, 113);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;
const Pcontainer = styled.div`
  display: flex;
  margin-top: -30px;
  margin-left: 47.5%;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 780px){
    margin-left: 25%;
  }
     @media (max-width: 680px){
    margin-left: 2%;
  }
  @media (max-width: 480px){
    margin-left: 42%;
  }
`
const P1 = styled.p`
  margin: 0px;
`
const P2 = styled.p`
  margin: -13px;
  opacity: 70%;
`
const P3 = styled.p`
  margin: -0px;
  opacity: 50%;
`
const P4 = styled.p`
  margin: -13px;
  opacity: 30%;
`
const P5 = styled.p`
  margin: -0px;
  opacity: 10%;
`

const Links = styled.div`
margin-top: -32px;
display: flex;
justify-content: flex-end;
flex-wrap: nowrap;
text-wrap: nowrap;
margin-right: 20px;
@media (max-width: 780px){
margin-right: 105px;}
@media (max-width: 680px){
margin-right: 105px;}
`
const StyledLink = styled(Link)`
margin-left: 2%;
border: 1px solid black;
border-radius: 0 20% 0 20%;
padding: 5px;
text-decoration: none;
color: black;
`