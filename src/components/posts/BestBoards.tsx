import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const BoardBlock = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  width: 130px;
  background-color: white;
  border-radius: 10px;
  margin-top: 3rem;
  li {
    list-style: none;
    text-align: center;
    padding: 0.2rem;
    width: 100%;
    background-color: ${palette.blue[4]};

    &:hover {
      cursor: pointer;
      color: ${palette.gray[6]};
    }

    &:nth-child(2) {
      padding-top: 0.4rem;
      border-radius: 5px 5px 0 0;
    }
    &:last-child {
      padding-bottom: 0.4rem;
      border-radius: 0 0 5px 5px;
    }
  }

  span {
    font-weight: 700;
    text-align: center;
    padding-bottom: 3px;
    margin-bottom: 3px;
    border-bottom: 0.5px solid whitesmoke;
    width: 100%;
  }

  p {
    margin: 0;
    background-color: ${palette.blue[5]};
    border-radius: 3px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BestBoardLink = styled(Link)`
  flex: 1 1 0;
`;

const BestBoards = ({ boards }: { boards: any }) => {
  return (
    <BoardBlock>
      <span>인기 게시글</span>
      {boards.map((board: { title: string; _id: string; username: string }) => (
        <li key={board._id}>
          <p>
            <BestBoardLink to={`/@${board.username}/${board._id}`}>
              {board.title}
            </BestBoardLink>
          </p>
        </li>
      ))}
    </BoardBlock>
  );
};

export default BestBoards;
