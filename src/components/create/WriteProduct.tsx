import styled from 'styled-components';
import palette from '../../lib/styles/palette';
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
  #desc {
    border: none;
    background-color: ${palette.blue[1]};
  }
  textarea {
    resize: none;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 0.5rem;
  }
`;

const WriteProduct = () => {
  return (
    <WriteProductSection>
      <div>
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" />
      </div>
      <div>
        <label htmlFor="company">회사</label>
        <input type="text" name="company" id="company" />
      </div>
      <div>
        <label htmlFor="category">장르</label>
        <select name="category" id="category">
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
        <label htmlFor="desc">설명</label>
        <textarea
          name="desc"
          id="desc"
          cols={120}
          rows={10}
          placeholder="게임 설명을 추가해주세요."
        />
      </div>
      <div>
        <label htmlFor="uploadImg">이미지 첨부</label>
        <input
          type="file"
          name="uploadImg"
          id="uploadImg"
          accept="image/png, image/jpeg"
        />
      </div>
      <BtnDiv>
        <Button>등록하기</Button>
        <Button>뒤로가기</Button>
      </BtnDiv>
    </WriteProductSection>
  );
};

export default WriteProduct;
