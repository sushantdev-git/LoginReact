import LoginPage from "./Pages/LoginPage/LoginPage";

import { Routes, Route, Navigate } from "react-router-dom"; 
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path='/home' exact element={<HomePage/>}></Route>
      <Route path='/login' exact element={<LoginPage/>}></Route>
      <Route path='/' exact element={<Navigate to={'/login'}/>}></Route>
    </Routes>
  );
}

export default App;
