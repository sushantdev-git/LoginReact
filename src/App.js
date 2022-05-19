import LoginPage from "./Pages/LoginPage/LoginPage";

import { Routes, Route, Navigate } from "react-router-dom"; 
import HomePage from "./Pages/Home/HomePage";

import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {

  const [user] = useAuthState(auth);
  
  console.log(user)

  return (
    <Routes>
      <Route path='/home' exact element={user ? <HomePage/> : <Navigate to={'/login'}/>}></Route>
      <Route path='/login' exact element={user ? <Navigate to={'/home'}/> : <LoginPage/>}></Route>
      <Route path='/' exact element={<Navigate to={'/login'}/>}></Route>
    </Routes>
  );
}

export default App;
