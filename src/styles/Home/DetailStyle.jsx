import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
   height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 36px;
  padding-top:14%;
  padding-bottom: 25%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Line = styled.hr`
  width: 364px;
  height: 2px;
  background-color: #ddd;
  border: none;
  margin: 0 auto;
  margin-bottom: -5%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; 
  padding: 0 16px;
`;

export const SwiperContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%; 
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

  &:hover {
    background-color: #ffffff;
    color: #ee8814;
  }
`;

export const DescriptionBox = styled.div`
  width: 353px;
  min-height: 200px;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #b2b2b2;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const DescriptionText = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: #000;
  white-space: pre-line; 
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentBox = styled.div`
  width: 353px;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ isHighlighted }) => (isHighlighted ? "#FFEBD4" : "white")};
  border: ${({ isHighlighted }) => (isHighlighted ? "none" : "1px solid #b2b2b2")};
  transition: background-color 0.3s ease, border 0.3s ease;
`;


export const CommentText = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: #000;
  white-space: pre-line; 
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentHeader = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom:-5%;
  margin-left: 15%;
`;

export const ReplyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

`;

export const ReplyHeader = styled.div`
width: 100%;
  margin-left: 15%;
  cursor: pointer;
   margin-top: -7%;
   
  &:hover {
    color: #333;
  }
`;

export const ReplyIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: -10%;
`;

export const ReplyText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #666;
  margin-top: -2%;
  margin-left: 5%;

  &:hover {
    color: #333;
  }
`;


export const ReplyBox = styled.div`
  width: 303px;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #b2b2b2;
  margin-top: -3%;
  margin-left: 10%;
`;
