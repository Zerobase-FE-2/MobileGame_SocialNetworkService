import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import sortByComment from '../../modules/function/sortByComment';
import sortByDate from '../../modules/function/sortByDate';
import sortByScore from '../../modules/function/sortByRating';
import { comment } from '../../modules/redux/commentSlice';
import { product } from '../../modules/redux/productsSlice';
import Button from '../common/Button';

const TopList = styled.article`
  display: flex;
  flex-direction: column;
  height: full;
  background-color: ${palette.blue[0]};
  border-radius: 10px;
  @media (min-width: 1024px) {
    grid-row: 1 / span 2;
  }
  @media (max-width: 1024px) {
    margin: 1rem 3rem 0 3rem;
  }
`;
const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;
const TopNav = styled.nav`
  height: full;
  button {
    margin: 0.5rem 0.5rem 0 0.5rem;
    border-radius: 10px 10px 0 0;
    padding-bottom: -1.5px;
  }
`;
const TopUl = styled.ul`
  height: 27.5rem;
  border-radius: 0 0 10px 10px;
  background-color: white;
  margin: 0;
  padding: 0;
`;
const Title = styled.h2`
  color: black;
  font-size: large;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0;
`;
const ItemDiv = styled.li`
  display: flex;
  padding: 0.5rem;
  img {
    width: 70px;
    height: 70px;
    margin-right: 0.5rem;
    border-radius: 10px;
  }
`;
const ItemTitle = styled.h2`
  margin: 0;
`;

const TopLists = ({
  products,
  comment,
  loading,
}: {
  products: product[];
  comment: comment[];
  loading: boolean;
}) => {
  const [list, setList] = useState<product[]>([]);
  useEffect(() => {
    if (!loading && products && comment) {
      setList(sortByScore(products));
    }
  }, []);
  if (loading || !products || !comment) {
    return <h1>loading...</h1>;
  }

  return (
    <TopList>
      <TopMenu>
        <Title>TOP 5</Title>
        <TopNav>
          <Button
            onClick={() => {
              setList(sortByScore(products));
            }}
          >
            인기 순
          </Button>
          <Button
            onClick={() => {
              setList(sortByDate(products));
            }}
          >
            최신 순
          </Button>
          <Button
            onClick={() => {
              setList(sortByComment(products, comment));
            }}
          >
            댓글 순
          </Button>
        </TopNav>
      </TopMenu>
      <TopUl>
        {list.map((item: product) => (
          <Link to={`/category/${item.id}`} key={item.id}>
            <ItemDiv>
              <img src={item.image} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
            </ItemDiv>
          </Link>
        ))}
      </TopUl>
    </TopList>
  );
};

export default TopLists;
