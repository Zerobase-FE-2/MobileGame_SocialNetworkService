import styled from 'styled-components';

const PopularList = styled.div`
  width: 130px;
  max-height: 320px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  h2 {
    font-weight: 600;
    color: black;
    margin: 0;
  }
`;

const PopularBoard = () => {
  return (
    <PopularList>
      <h2>인기 게임</h2>
    </PopularList>
  );
};

export default PopularBoard;
