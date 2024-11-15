import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./pages/Login/Splash";
import FirstPage from "./pages/Login/FirstPage";
import Select from "./pages/Login/Select";
import Signin from "./pages/Login/Signin";
import Signup from "./pages/Login/Signup";
import Detail from "./pages/Home/Detail";
import Home from "./pages/Home/Home";
import Upload from "./pages/Home/Upload";
import Education from "./pages/Education/Education";
import AskB from "./pages/MyPage/AskB";
import MyPageB from "./pages/MyPage/MyPageB";
import MyPageS from "./pages/MyPage/MyPageS";
import AskManagement from "./pages/MyPage/AskManagement";
import OrderManagement from "./pages/MyPage/OrderManagement";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/firstpage" element={<FirstPage />} />
          <Route path="/select" element={<Select />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/education" element={<Education />} />
          <Route path="/askb" element={<AskB />} />
          <Route path="/mypageb" element={<MyPageB />} />
          <Route path="/mypages" element={<MyPageS />} />
          <Route path="/ask-management" element={<AskManagement />} />
          <Route path="/order-management" element={<OrderManagement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
