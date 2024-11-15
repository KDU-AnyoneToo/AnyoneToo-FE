import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170%; 
  gap: 36px; 
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Line = styled.hr`
  width: 364px;
  height: 2px;
  background-color: #ddd;
  border: none;
  margin: 0 auto;
  margin-bottom: 36px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 180px); 
  gap: 36px 14px; 
  justify-content: center;
`;

export const Box = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: ${({ image }) =>
    image ? `url(${image}) center/cover no-repeat` : "none"};
`;


export const Label = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.8); 
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`;

export const Button = styled.button`
  width: 344px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #ee8814;
  color: white;
  transition: background-color 0.3s ease;
  margin-top: 40px;

  &:hover {
    background-color: #ffffff;
    color: #ee8814;
  }
`;

