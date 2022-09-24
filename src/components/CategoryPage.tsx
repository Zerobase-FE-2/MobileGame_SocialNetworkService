import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

import styled from 'styled-components';

import { API_URL } from '../App';

const CategorySection = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  background-color: #f1f1f1;
  nav {
    width: 30rem;
    height: fit-content;
    background-color: white;
    margin: 0 1rem;
  }
  ul {
    padding: 0;
  }
  li {
    color: black;
    padding: 0.5rem;
  }
  h2 {
    font-weight: 600;
    color: black;
    padding: 0.5rem;
  }
  article {
    width: full;
    min-height: 100vh;
    background-color: white;
    margin-bottom: 1rem;
  }
`;

const Products = styled.div`
  display: flex;
  width: full;
  height: fit-content;
  padding: 1rem;
  figure {
    flex-shrink: 0;
    width: fit-content;
    height: full;
  }
  img {
    width: fit-content;
    border-radius: 10px;
  }
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-weight: 600;
    color: black;
    padding-top: 0;
  }
  p {
    width: full;
    height: 3rem;
    padding: 0.5rem;
    overflow: hidden;
    margin-top: 0;
  }
`;

const PopularList = styled.div`
  width: 40rem;
  height: 24rem;
  background-color: white;
  margin: 0 1rem;

  h2 {
    font-weight: 600;
    padding: 0.5rem;
    color: black;
  }
`;

export const CategoryPage = () => {
  const [category, setCategory] = useState(null);

  async function fetcher(url: string) {
    const fetchedData = await axios.get(url);
    return fetchedData.data;
  }

  const { data } = useSWR('post', () => fetcher(API_URL));

  return (
    <CategorySection>
      <nav>
        <h2>카테고리</h2>
        <ul>
          <li onClick={() => setCategory(null)}>전체</li>
          <li
            onClick={(event) => {
              const target = event.target as HTMLElement;
              setCategory(target.innerText);
            }}
          >
            액션
          </li>
          <li
            onClick={(event) => {
              const target = event.target as HTMLElement;
              setCategory(target.innerText);
            }}
          >
            어드벤처
          </li>
          <li
            onClick={(event) => {
              const target = event.target as HTMLElement;
              setCategory(target.innerText);
            }}
          >
            롤플레잉
          </li>
          <li
            onClick={(event) => {
              const target = event.target as HTMLElement;
              setCategory(target.innerText);
            }}
          >
            자동차 경주
          </li>
          <li
            onClick={(event) => {
              const target = event.target as HTMLElement;
              setCategory(target.innerText);
            }}
          >
            시뮬레이션
          </li>
          <li
            onClick={(event) => {
              const target = event.target as HTMLElement;
              setCategory(target.innerText);
            }}
          >
            캐주얼 게임
          </li>
        </ul>
      </nav>
      <article>
        {category === null
          ? data.map((item: any) => (
              <Products key={item.id}>
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <ProductDesc>
                  <h2>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                  </h2>
                  <p>
                    <Link to={`/${item.id}`}>{item.description}</Link>
                  </p>
                </ProductDesc>
              </Products>
            ))
          : data
              .filter((item: any) => item.category === category)
              .map((item: any) => (
                <Products key={item.id}>
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                  <ProductDesc>
                    <h2>
                      <Link to={`/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p>
                      <Link to={`/${item.id}`}>{item.description}</Link>
                    </p>
                  </ProductDesc>
                </Products>
              ))}
      </article>
      <PopularList>
        <h2>인기 게임</h2>
      </PopularList>
    </CategorySection>
  );
};
