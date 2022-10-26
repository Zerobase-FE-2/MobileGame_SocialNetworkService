import { useAppDispatch } from '../../modules/redux/hook';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { REMOVE_PRODUCTS } from '../../modules/redux/productsSlice';
import { Link, Params, useNavigate } from 'react-router-dom';

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

const Buttons = ({ params }: { params: Readonly<Params<string>> }) => {
  const intParams = parseInt(params.id!);
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
      <Link to={`/update/${params.id}`}>
        <Button>수정</Button>
      </Link>
    </ButtonDiv>
  );
};

export default Buttons;
