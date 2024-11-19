import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  max-width: 100%; 
  width: 100%;
  padding: 0 16px; 
  box-sizing: border-box; 
  top: 5%;
`;

export const Logo = styled.img`
  width: 118px;
  height: 25px;
`;

export const RightIcons = styled.div`
  display: flex;
  gap: 23px; 
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer; 
`;

export const Separator = styled.div`
  position: absolute;
  top:11%;
  width: 95%; 
  height: 1px;
  background-color: #e2e2e2;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff; 
  border-radius: 20px;
  padding: 12px 20px;
  gap: 8px;
  width: 80%; 
  border: 1px solid #000;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  color: #333;
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;