import styled from 'styled-components';
import DislikeImg from '../../assets/dislike.png';

const DislikeBtn = styled.button`
  outline: none;
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
const DisLikeButton = ({ dislikeCnt, onAdd }: any) => {
  return (
    <DislikeBtn onClick={onAdd}>
      <DisLike src={DislikeImg} alt="dislike" />
      {dislikeCnt}
    </DislikeBtn>
  );
};

export default DisLikeButton;
