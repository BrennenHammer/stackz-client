import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
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
      <Menu open={menuOpen}>
        <Links>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/addItems">Add Item</StyledLink>
          <StyledLink to="ProfilePage">Profile</StyledLink>
          <StyledLink to="/cart">Your Cart</StyledLink>
        </Links>
      </Menu>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  background-color: lightgrey;
  height: 80px;
  border-bottom: 1px solid rgb(26, 36, 113);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const Pcontainer = styled.div`
  display: flex;
  margin-left: 48%;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 950px) {
    margin-left: 47%;
  }
  @media (max-width: 780px) {
    margin-left: 5%;
  }
  @media (max-width: 680px) {
    margin-left: 5%;
  }
  @media (max-width: 480px) {
    margin-left: 5%;
  }
`;

const P1 = styled.p`
  margin: 0px;
`;

const P2 = styled.p`
  margin: -13px;
  opacity: 70%;
`;

const P3 = styled.p`
  margin: -0px;
  opacity: 50%;
`;

const P4 = styled.p`
  margin: -13px;
  opacity: 30%;
`;

const P5 = styled.p`
  margin: -0px;
  opacity: 10%;
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: block;
    margin-right: 50px;
    font-size: 24px;
    margin-top: -10px;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  @media (max-width: 780px) {
    display: ${(props) => (props.open ? "block" : "none")};
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
  }
  @media (min-width: 781px) {
    display: block;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  text-wrap: nowrap;
  margin-right: 20px;
  @media (max-width: 780px) {
    margin-top: 0;
    flex-direction: column;
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 2%;
  border: 1px solid black;
  border-radius: 0 20% 0 20%;
  padding: 5px;
  text-decoration: none;
  color: black;
  @media (max-width: 780px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;