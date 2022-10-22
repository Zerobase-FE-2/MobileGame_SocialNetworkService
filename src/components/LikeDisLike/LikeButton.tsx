import styled from 'styled-components';
import LikeImg from '../../assets/like.png';

const LikeBtn = styled.button`
  outline-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s transform ease;
  }
`;
const Like = styled.img`
  height: 2rem;
`;

const LikeButton = ({ likeCnt, onAdd }: any) => {
  console.log(likeCnt);
  return (
    <LikeBtn onClick={onAdd}>
      <Like src={LikeImg} alt="like" />
      {likeCnt}
    </LikeBtn>
  );
};

export default LikeButton;
