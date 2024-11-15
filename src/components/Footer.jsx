import React, { useState } from "react";
import * as F from "../styles/Components/FooterStyle";
import { useNavigate } from "react-router-dom";

import homeDefault from "../assets/images/Footer/homeD.png";
import homeActive from "../assets/images/Footer/homeA.png";
import educationDefault from "../assets/images/Footer/educationD.png";
import educationActive from "../assets/images/Footer/educationA.png";
import myPageDefault from "../assets/images/Footer/mypageD.png";
import myPageActive from "../assets/images/Footer/mypageA.png";

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState("home"); 
  const navigate = useNavigate(); 

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "home") navigate("/home");
    else if (menu === "education") navigate("/education");
    else if (menu === "mypage") navigate("/mypage");
  };

  return (
    <F.FooterContainer>
      <F.MenuItem
        onClick={() => handleMenuClick("home")}
        src={activeMenu === "home" ? homeActive : homeDefault}
        alt="Home"
      />
      <F.MenuItem
        onClick={() => handleMenuClick("education")}
        src={activeMenu === "education" ? educationActive : educationDefault}
        alt="Education"
      />
      <F.MenuItem
        onClick={() => handleMenuClick("mypage")}
        src={activeMenu === "mypage" ? myPageActive : myPageDefault}
        alt="My Page"
      />
    </F.FooterContainer>
  );
};

export default Footer;
