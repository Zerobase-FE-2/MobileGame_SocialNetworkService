import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useAppDispatch } from '../../modules/redux/hook';
import { product, UPDATE_PRODUCTS } from '../../modules/redux/productsSlice';
import Button from '../common/Button';

const WriteProductSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 80vh;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${palette.blue[0]};
  div {
    margin: 1rem;
  }
  label {
    margin-right: 1rem;
    font-weight: 600;
  }
  #title,
  #company,
  select {
    width: 10rem;
    height: 1.5rem;
    border: none;
    background-color: ${palette.blue[1]};
  }
  #description {
    border: none;
    background-color: ${palette.blue[1]};
  }
  textarea {
    resize: vertical;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 0.5rem;
  }
`;
// type issue
const WriteProduct = ({ products }: { products: product[] }) => {
  const params = useParams();
  const product: product = products.find(
    (item: product) => item.id.toString() === params.id
  )!;
  const navigate = useNavigate();
  const [info, setInfo] = useState<product>(product);
  const screenshotRef = useRef(null);
  const dispatch = useAppDispatch();
  const {
    category,
    company,
    description,
    id,
    image,
    rating,
    screenshot,
    title,
  } = info;

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value }: { name: any; value: any } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  return (
    <WriteProductSection>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={onChange}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="company">회사</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={onChange}
          value={company}
        />
      </div>
      <div>
        <label htmlFor="category">장르</label>
        <select
          name="category"
          id="category"
          onChange={onChange}
          value={category}
        >
          <option value="">장르를 선택해주세요.</option>
          <option value="액션">액션</option>
          <option value="롤플레잉">롤플레잉</option>
          <option value="어드벤처">어드벤처</option>
          <option value="시뮬레이션">시뮬레이션</option>
          <option value="전략">전략</option>
          <option value="스포츠">스포츠</option>
          <option value="자동차 경주">자동차 경주</option>
          <option value="캐주얼 게임">캐주얼 게임</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">설명</label>
        <textarea
          name="description"
          id="description"
          cols={120}
          rows={10}
          placeholder="게임 설명을 추가해주세요."
          onChange={onChange}
          value={description}
        />
      </div>
      <div>
        <label htmlFor="uploadImg">스크린샷 첨부</label>
        <input
          type="file"
          name="uploadImg"
          id="uploadImg"
          accept="image/png, image/jpeg"
          ref={screenshotRef}
          multiple={true}
        />
      </div>
      <BtnDiv>
        <Button
          onClick={() => {
            dispatch(UPDATE_PRODUCTS({ product: info }));
            navigate(-1);
          }}
        >
          등록하기
        </Button>
        <Button>뒤로가기</Button>
      </BtnDiv>
    </WriteProductSection>
  );
};

export default WriteProduct;
