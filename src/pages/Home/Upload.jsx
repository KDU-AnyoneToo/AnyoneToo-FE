import React from "react";
import * as C from "../../styles/CommonStyle";
import * as U from "../../styles/Home/UploadStyle";
import Back from "../../components/back";

function Upload() {
  return (
    <C.Page>
       <Back />
      <C.Center>
        <C.PageSpace>
        <U.Wrapper>
            <U.Title>관심사 선택</U.Title>
            <U.Line />



          </U.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Upload;
