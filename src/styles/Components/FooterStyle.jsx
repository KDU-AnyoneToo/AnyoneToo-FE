import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    height: 60px; /* 모바일에서 높이 조정 */
  }
`;

export const MenuItem = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.2s;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px; /* 모바일에서 크기 조정 */
  }
`;
