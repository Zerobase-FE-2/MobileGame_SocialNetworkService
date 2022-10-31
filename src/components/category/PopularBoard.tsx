import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sortByScore from '../../modules/function/sortByRating';
import { product } from '../../modules/redux/productsSlice';

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
    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
    }
  }
  div {
    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
    }
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    @media (max-width: 1024px) {
      margin: 0 1rem;
    }
  }
  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

const PopularBoard = ({ products }: { products: product[] }) => {
  const popularProducts = sortByScore(products);
  return (
    <PopularList>
      <span>인기 게임</span>
      <div>
        {popularProducts.map((item: product) => (
          <Link to={`/category/${item.id}`} key={item.id}>
            <img src={item.image} alt={item.title} />
          </Link>
        ))}
      </div>
    </PopularList>
  );
};

export default PopularBoard;
