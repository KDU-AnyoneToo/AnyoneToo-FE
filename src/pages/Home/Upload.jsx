import React, { useRef, useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as U from "../../styles/Home/UploadStyle";
import Back from "../../components/back";

function Upload() {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [productName, setProductName] = useState(''); 
  const [productDetails, setProductDetails] = useState('');
  const [productPrice, setProductPrice] = useState('00,000원'); // 가격 상태

  const handleAddPhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const adjustTextAreaHeight = event => {
    const target = event.target;
    target.style.height = 'auto'; 
    const newHeight = Math.max(target.scrollHeight, 100); 
    target.style.height = `${newHeight}px`; 
  };
  
  
  return (
    <U.Page>
      <Back />
      <U.Center>
        <U.PageSpace>
          <U.Wrapper>
            <U.Title>관심사 선택</U.Title>
            <U.Line />
            <U.PhotoAddButton onClick={handleAddPhotoClick} style={{
              backgroundImage: `url(${imagePreview})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center center', 
              backgroundRepeat: 'no-repeat', 
            }}>
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              {!imagePreview && <span style={{ fontSize: '48px', color: 'white' }}>+</span>}
            </U.PhotoAddButton>
            <U.ProfileSection>
              <U.ProfileImage src={imagePreview || 'defaultProfile.png'} alt="Profile" />
              <U.ProfileName>사용자 이름</U.ProfileName>
            </U.ProfileSection>
            <U.Input
              value={productName}
              onChange={e => setProductName(e.target.value)}
              placeholder="상품 이름"
            />
            <U.PriceButton>
              <U.PriceLabel>상품 금액</U.PriceLabel>
              <U.PriceValue>{productPrice}</U.PriceValue>
            </U.PriceButton>
            <U.TextArea
              value={productDetails}
              onChange={e => setProductDetails(e.target.value)}
              onInput={adjustTextAreaHeight}  
              placeholder="상품 상세 내용을 작성해주세요"
            />
            <U.ButtonRow>
              <U.CancelButton onClick={() => console.log('취소')}>취소</U.CancelButton>
              <U.CompleteButton onClick={() => console.log('완료')}>완료</U.CompleteButton>
            </U.ButtonRow>
          </U.Wrapper>
        </U.PageSpace>
      </U.Center>
    </U.Page>
  );
}

export default Upload;
