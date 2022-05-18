import LoginPage from "./Pages/LoginPage/LoginPage";

import { Routes, Route, Navigate } from "react-router-dom"; 

function App() {
  return (
    <Routes>
      <Route path='/login' exact element={<LoginPage/>}></Route>
      <Route path='/' exact element={<Navigate to={'/login'}/>}></Route>
    </Routes>
  );
}

export default App;
