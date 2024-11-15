import React from "react";
import * as MB from "../styles/Components/MyPageB";
import Profile from "../assets/images/MyPage/profile.png";
import Plus from "../assets/images/MyPage/plus.png";

function MypageB() {
  return (
    <MB.List>
      <MB.ListItem>
        <MB.ListContent>
          <MB.ListContainer>
            <MB.ListImg src={Profile}></MB.ListImg>
            <MB.ListText>Test</MB.ListText>
          </MB.ListContainer>
          <MB.ListMore src={Plus}></MB.ListMore>
        </MB.ListContent>
      </MB.ListItem>
    </MB.List>
  );
}

export default MypageB;
