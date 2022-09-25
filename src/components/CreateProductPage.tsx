import styled from 'styled-components';

const ProductInfoDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-right: 2rem;
`;

const ProductInfoInput = styled.input`
  width: 12rem;
  height: 1rem;
  margin: 0.5rem 0;
`;
const ProductInfoSelect = styled.select`
  width: 12.5rem;
  height: 1.5rem;
  margin: 0.5rem 0;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const CreateBtn = styled.button`
  width: 4rem;
  height: 2rem;
  margin: 2rem;
  border: none;
  border-radius: 1rem;
`;

export const CreateProductPage = () => {
  return (
    <>
      <ProductInfoDiv>
        <ProductInfo>
          <label htmlFor="title">제목</label>
          <ProductInfoInput type="text" name="title" id="title" />
          <label htmlFor="company">제작사</label>
          <ProductInfoInput type="text" name="company" id="company" />
          <label htmlFor="category">장르</label>
          <ProductInfoSelect name="category" id="category">
            <option value="" selected>
              장르를 선택해주세요.
            </option>
            <option value="액션">액션</option>
            <option value="어드벤처">어드벤처</option>
            <option value="롤플레잉">롤플레잉</option>
            <option value="자동차 경주">자동차 경주</option>
            <option value="시뮬레이션">시뮬레이션</option>
            <option value="캐주얼 게임">캐주얼 게임</option>
          </ProductInfoSelect>
        </ProductInfo>
        <ProductDesc>
          <label htmlFor="productDesc">상세정보</label>
          <textarea
            name="상세정보"
            id="productDesc"
            cols={50}
            rows={10}
          ></textarea>
        </ProductDesc>
      </ProductInfoDiv>
      <CreateBtn>등록</CreateBtn>
    </>
  );
};
