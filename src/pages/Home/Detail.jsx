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
import test1 from "../../assets/images/test1.png";
import test2 from "../../assets/images/test2.png";
import test3 from "../../assets/images/test3.png";

function Detail() {
  const [images, setImages] = useState([test1, test2, test3]);

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <D.Wrapper>
            <D.Title>관심사 선택</D.Title>
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
                      className.includes("swiper-pagination-bullet-active") ? "#CCC" : "#EE8814"
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
            <D.Button className="next">구매하기</D.Button>
          </D.Wrapper>
        </C.PageSpace>
      </C.Center>
      <Footer />
    </C.Page>
  );
}

export default Detail;
