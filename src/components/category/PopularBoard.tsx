import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sortByScore from '../../modules/function/sortByRating';

const PopularList = styled.div`
  width: 130px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  span {
    font-weight: 700;
    text-align: center;
    padding-bottom: 3px;
    margin-bottom: 3px;
    border-bottom: 0.5px solid whitesmoke;
    width: 100%;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }
`;

const PopularBoard = ({ products }: any) => {
  const popularProducts = sortByScore(products);
  return (
    <PopularList>
      <span>인기 게임</span>
      {popularProducts.map((item: any) => (
        <Link to={`/category/${item.id}`} key={item.id}>
          <img src={item.image} alt={item.title} />
        </Link>
      ))}
    </PopularList>
  );
};

export default PopularBoard;
