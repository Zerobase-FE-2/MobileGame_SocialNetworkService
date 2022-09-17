import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import tw from 'tailwind-styled-components';

import { API_URL } from '../App';

const CategorySection = tw.section`
flex justify-around pt-4 bg-gray-300
`;

const CategoryNav = tw.nav`
w-60 min-h-full h-full bg-white mx-4
`;

const CategoryList = tw.li`
p-2 text-black hover:cursor-pointer
`;

const Article = tw.article`
w-full min-h-screen bg-white mb-4
`;

const PopularList = tw.div`
w-72 h-96 bg-white mx-4
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
      <CategoryNav>
        <h2 className="p-2 font-semibold text-black">카테고리</h2>
        <ul>
          <CategoryList onClick={() => setCategory(null)}>전체</CategoryList>
          <CategoryList
            onClick={(event) => {
              setCategory(event.target.innerText);
            }}
          >
            액션
          </CategoryList>
          <CategoryList
            onClick={(event) => setCategory(event.target.innerText)}
          >
            어드벤처
          </CategoryList>
          <CategoryList
            onClick={(event) => setCategory(event.target.innerText)}
          >
            롤플레잉
          </CategoryList>
          <CategoryList
            onClick={(event) => setCategory(event.target.innerText)}
          >
            자동차 경주
          </CategoryList>
          <CategoryList
            onClick={(event) => setCategory(event.target.innerText)}
          >
            시뮬레이션
          </CategoryList>
          <CategoryList
            onClick={(event) => setCategory(event.target.innerText)}
          >
            캐주얼 게임
          </CategoryList>
        </ul>
      </CategoryNav>
      <Article>
        {category === null
          ? data.map((item: any) => (
              <div className="w-full h-fit p-4 flex gap-4" key={item.id}>
                <figure className="shrink-0 w-fit h-full">
                  <img
                    className="w-fit rounded"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                <div className="flex flex-col gap-4">
                  <h2 className="text-black font-semibold">{item.title}</h2>
                  <p className="w-full h-12 overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          : data
              .filter((item: any) => item.category === category)
              .map((item: any) => (
                <div className="w-full h-fit p-4 flex gap-4" key={item.id}>
                  <figure className="shrink-0 w-fit h-full">
                    <img
                      className="w-fit rounded"
                      src={item.image}
                      alt={item.title}
                    />
                  </figure>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-black font-semibold">{item.title}</h2>
                    <p className="w-full h-12 overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
      </Article>
      <PopularList>
        <h2 className="p-2 font-semibold text-black">인기 게임</h2>
      </PopularList>
    </CategorySection>
  );
};
