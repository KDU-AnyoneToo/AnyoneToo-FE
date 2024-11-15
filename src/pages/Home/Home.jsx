import React from "react";
import * as C from "../../styles/CommonStyle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <C.Page>
       <Header />
      <C.Center>
        <C.PageSpace>

        </C.PageSpace>
        <Footer />
      </C.Center>
    </C.Page>
  );
}

export default Home;
