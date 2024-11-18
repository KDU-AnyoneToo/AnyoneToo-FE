import React, { useState } from "react";
import * as MS from "../styles/Components/MyPageSStyle";
import ModalDelete from "../components/ModalDelete";

function MyPageS() {
  const [isModalOpenD, setIsModalOpenD] = useState(false);
  const [isModalVisibleD, setIsModalVisibleD] = useState(false);

  const openModalD = () => {
    setIsModalOpenD(true);
    setIsModalVisibleD(true);
  };
  const closeModalD = () => {
    setIsModalVisibleD(false);
    setTimeout(() => {
      setIsModalOpenD(false);
    }, 400);
  };

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
          <MS.Button onClick={openModalD}>삭제</MS.Button>
          {isModalOpenD && <ModalDelete onClose={closeModalD} isModalVisibleD={isModalVisibleD} />}
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
          <MS.Button onClick={openModalD}>삭제</MS.Button>
          {isModalOpenD && <ModalDelete onClose={closeModalD} isModalVisibleD={isModalVisibleD} />}
          <MS.ListLine></MS.ListLine>
          <MS.Button style={{ fontWeight: "bold", color: "#000000" }}>수정</MS.Button>
        </MS.ListButton>
      </MS.ListItem>
    </MS.List>
  );
}

export default MyPageS;
