import React from "react";
import * as C from "../../styles/CommonStyle";
import * as D from "../../styles/Home/DetailStyle";
import Back from "../../components/back";
import Footer from '../../components/Footer';

function Detail() {
  return (
    <C.Page>
       <Back />
      <C.Center>
        <C.PageSpace>
        <D.Wrapper>
            <D.Title>관심사 선택</D.Title>
            <D.Line />

            <D.Button className="next">구매하기</D.Button>
          </D.Wrapper>
        </C.PageSpace>
      </C.Center>
      <Footer />
    </C.Page>
  );
}

export default Detail;
