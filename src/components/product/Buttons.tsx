import { useAppDispatch } from '../../modules/redux/hook';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { REMOVE_PRODUCTS } from '../../modules/redux/productsSlice';
import { useNavigate } from 'react-router-dom';

const ButtonDiv = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${palette.blue[0]};
  button {
    width: 5.5rem;
    height: 3.5rem;
  }
`;

const Buttons = ({ params }: any) => {
  const intParams = parseInt(params.id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <ButtonDiv>
      <Button
        onClick={() => {
          dispatch(REMOVE_PRODUCTS({ id: intParams }));
          navigate(-1);
        }}
      >
        삭제
      </Button>
      <Button>수정</Button>
    </ButtonDiv>
  );
};

export default Buttons;
