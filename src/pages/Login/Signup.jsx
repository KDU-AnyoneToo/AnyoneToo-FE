import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as U from "../../styles/Login/SignupStyle";

function App() {
  const [role, setRole] = useState("");

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <U.Wrapper>
            <U.FieldContainer marginBottom="70px">
              <U.InputGroup>
                <U.Input type="text" placeholder="아이디" />
                <U.DuplicateButton>중복확인</U.DuplicateButton>
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer marginBottom="px">
              <U.InputGroup>
                <U.Input type="password" placeholder="비밀번호" />
              </U.InputGroup>
            </U.FieldContainer>
            <U.FieldContainer marginBottom="50px">
              <U.InputGroup>
                <U.Input type="password" placeholder="비밀번호 확인" />
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer marginBottom="0px" marginTop="10px">
              <U.InputGroup>
                <U.Input type="text" placeholder="이름" />
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer marginBottom="20px">
              <U.InputGroup>
                <U.Input type="number" placeholder="나이" />
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer align="center" marginBottom="40px">
              <U.RoleButtonGroup>
                <U.RoleButton
                  className={role === "seller" ? "selected" : ""}
                  onClick={() => handleRoleClick("seller")}
                >
                  판매자
                </U.RoleButton>
                <U.RoleButton
                  className={role === "buyer" ? "selected" : ""}
                  onClick={() => handleRoleClick("buyer")}
                >
                  구매자
                </U.RoleButton>
              </U.RoleButtonGroup>
            </U.FieldContainer>

            <U.FieldContainer>
              <U.Button className="next">다음</U.Button>
            </U.FieldContainer>
          </U.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default App;
