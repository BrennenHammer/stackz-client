import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkAuth(); // Run on mount
    window.addEventListener('storage', checkAuth); // Listen for login event

    return () => window.removeEventListener('storage', checkAuth); // Cleanup
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <NavBar>
      <Pcontainer>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><P1>Stackz</P1></Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><P2>Stackz</P2></Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><P3>Stackz</P3></Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><P4>Stackz</P4></Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><P5>Stackz</P5></Link>
      </Pcontainer>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>&#9776;</Hamburger>
      <Menu open={menuOpen}>
        <Links>
          {isLoggedIn ? (
            <>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/addItems">Add Item</StyledLink>
              <StyledLink to="/profilepage">Profile</StyledLink>
              <StyledLink to="/cart">Your Cart ({cartCount})</StyledLink>
              <StyledLink onClick={handleLogout} to="#">Logout</StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/signup">Sign Up</StyledLink>
              <StyledLink to="/cart">Your Cart ({cartCount})</StyledLink>
            </>
          )}
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

const P1 = styled.p` margin: 0px; `;
const P2 = styled.p` margin: -13px; opacity: 70%; `;
const P3 = styled.p` margin: -0px; opacity: 50%; `;
const P4 = styled.p` margin: -13px; opacity: 30%; `;
const P5 = styled.p` margin: -0px; opacity: 10%; `;

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
