import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/LoginFix.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AddItems from "./pages/addItems.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profilepage" element={<ProfilePage />}></Route>
        <Route path="/additems" element={<AddItems />}></Route>

      </Routes>
    </>
  );
}

export default App;