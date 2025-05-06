import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import AddItems from "./pages/addItems";
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