import React from "react";
import * as C from "../../styles/CommonStyle";
import * as M from "../../styles/MyPage/MyPage";
import MyPageB from "../../components/MypageB";
import MyPageS from "../../components/MypageS";
import Profile from "../../assets/images/MyPage/profile.png";

function MyPage() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <M.Profile>
            <M.ProfileImg src={Profile} alt="Profile"></M.ProfileImg>
            <M.ProfileText>Test</M.ProfileText>
          </M.Profile>
          <M.Division>
            <M.DivisionTitle>상품관리</M.DivisionTitle>
            <M.DivisionLine>
              <div />
            </M.DivisionLine>
          </M.Division>
          <M.Content>
            <MyPageS></MyPageS>
          </M.Content>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default MyPage;
