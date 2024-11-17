import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as D from "../../styles/Home/DetailStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Back from "../../components/back";
import Footer from "../../components/Footer";
import arrow from "../../assets/images/Home/arrow.svg";
import test1 from "../../assets/images/test1.png";
import test2 from "../../assets/images/test2.png";
import test3 from "../../assets/images/test3.png";
import userProfile from "../../assets/images/user.png";

function Detail() {
  const [images, setImages] = useState([test1, test2, test3]);
  const [showReplies, setShowReplies] = useState(false);

  const replies = [
    {
      id: 1,
      userName: "김답글1",
      userProfile: userProfile,
      content: "1",
    },
    {
      id: 2,
      userName: "김답글2",
      userProfile: userProfile,
      content: "2",
    },
  ];

  const handleReplyToggle = () => {
    setShowReplies((prevShowReplies) => !prevShowReplies);
  };

  return (
    <D.Page>
      <Back />
      <D.Center>
        <D.PageSpace>
          <D.Wrapper>
            <D.Title>하트 키링</D.Title>
            <D.Line />
            <D.SliderWrapper>
              <Swiper
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className}" style="width: 10px; height: 10px; margin: 0 5px; background-color: ${
                      className.includes("swiper-pagination-bullet-active")
                        ? "#CCC"
                        : "#EE8814"
                    }; border-radius: 50%;"></span>`;
                  },
                }}
                modules={[Pagination]}
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Preview ${index}`}
                      style={{
                        width: "321px",
                        height: "321px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </D.SliderWrapper>

            <D.DescriptionBox>
              <D.ProfileContainer>
                <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                <D.UserName>김옥순</D.UserName>
              </D.ProfileContainer>
              <D.DescriptionText>
                정신차려 하트 키링을 보며 늘 잊지 말아요! 신이어는 준이어를 항상 응원하고 언제나 곁에 있다는걸...
                사용자의 모니터 환경과 해상도에 따라 실제 색상과 차이가 날 수 있습니다.
                사이즈는 55x65mm로 패브릭 소재에요! 이 글이 얼마나 길어질지는 모르겠지만 이정도면 적당할까요
              </D.DescriptionText>
            </D.DescriptionBox>

            <D.Button className="next">구매하기</D.Button>

            <D.CommentHeader>댓글 1</D.CommentHeader>

            <D.CommentBox isHighlighted={showReplies}>
              <D.ProfileContainer>
                <D.ProfileImage src={userProfile} alt="사용자 프로필" />
                <D.UserName>김옥순</D.UserName>
              </D.ProfileContainer>
              <D.CommentText>
                정신차려 하트 키링을 보며 늘 잊지 말아요! 신이어는 준이어를 항상 응원하고 언제나 곁에 있다는걸...
              </D.CommentText>
            </D.CommentBox>

            <D.ReplyHeader onClick={handleReplyToggle}>
              <D.ReplyIcon src={arrow} alt="arrow icon" />
              <D.ReplyText>
                {showReplies ? `답글 ${replies.length}` : `답글 ${replies.length}`}
              </D.ReplyText>
            </D.ReplyHeader>

            {showReplies &&
              replies.map((reply) => (
                <D.ReplyBox key={reply.id}>
                  <D.ReplyContainer>
                    <D.ProfileImage src={reply.userProfile} alt="사용자 프로필" />
                    <D.UserName>{reply.userName}</D.UserName>
                  </D.ReplyContainer>
                  <D.CommentText>{reply.content}</D.CommentText>
                </D.ReplyBox>
              ))}

          </D.Wrapper>
        </D.PageSpace>
      </D.Center>
      <Footer />
    </D.Page>
  );
}

export default Detail;
