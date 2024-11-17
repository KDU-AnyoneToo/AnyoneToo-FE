import React from "react";
import * as MS from "../styles/Components/MyPageSStyle";

function MyPageS() {
  return (
    <MS.List>
      <MS.ListItem>
        <MS.ListImg></MS.ListImg>
        <MS.ListText>
          <MS.ListTitle>Test</MS.ListTitle>
          <MS.ListMore></MS.ListMore>
        </MS.ListText>
        <MS.LsitPrice>12,000원</MS.LsitPrice>
        <MS.ListButton>
          <MS.Button>삭제</MS.Button>
          <MS.ListLine></MS.ListLine>
          <MS.Button style={{ fontWeight: "bold", color: "#000000" }}>수정</MS.Button>
        </MS.ListButton>
      </MS.ListItem>
      <MS.ListItem>
        <MS.ListImg></MS.ListImg>
        <MS.ListText>
          <MS.ListTitle>Test</MS.ListTitle>
          <MS.ListMore></MS.ListMore>
        </MS.ListText>
        <MS.LsitPrice>12,000원</MS.LsitPrice>
        <MS.ListButton>
          <MS.Button>삭제</MS.Button>
          <MS.ListLine></MS.ListLine>
          <MS.Button style={{ fontWeight: "bold", color: "#000000" }}>수정</MS.Button>
        </MS.ListButton>
      </MS.ListItem>
    </MS.List>
  );
}

export default MyPageS;
