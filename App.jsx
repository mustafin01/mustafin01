import './App.css';
import Profile from './components/Profile'  
import CreateApp from './components/CreateApp'
import ProfileAdmin from './components/ProfileAdmin'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import Registration from './components/Registration'
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <>
      <Header setIsAdmin={setIsAdmin} isAdmin={isAdmin} isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></Header>
        <Routes>
          <Route path="/" element={<Main isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></Main>}></Route>
          <Route path="/reg" element={<Registration isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></Registration>}></Route>
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></Login>}></Route>
          <Route path="/profile" element={<Profile isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></Profile>}></Route>
          <Route path="/create_app" element={<CreateApp isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></CreateApp>}></Route>
          <Route path="/admin" element={<ProfileAdmin isAuth={isAuth} setIsAuth={setIsAuth} token={token} setToken={setToken}></ProfileAdmin>}></Route>
        </Routes>
        <Footer></Footer>
    </>
  );
}
export default App;
