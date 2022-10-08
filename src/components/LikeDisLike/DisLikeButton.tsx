import styled from 'styled-components';
import DislikeImg from '../../assets/dislike.png';

const DislikeBtn = styled.button`
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
const DisLike = styled.img`
  height: 2rem;
`;
const DisLikeButton = ({ dislike_cnt, onAdd }: any) => {
  return (
    <DislikeBtn onClick={onAdd}>
      <DisLike src={DislikeImg} alt="dislike" />
      {dislike_cnt}
    </DislikeBtn>
  );
};

export default DisLikeButton;
