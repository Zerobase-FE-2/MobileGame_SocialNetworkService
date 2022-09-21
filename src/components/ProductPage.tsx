import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import tw from 'tailwind-styled-components';
import { API_URL } from '../App';

const Section = tw.section`
min-h-full bg-gray-300
`;

const Article = tw.article`
flex p-4 bg-white p-12
`;

const DescDiv = tw.div`
flex flex-col justify-between ml-4
`;

const DescTitle = tw.h2`
font-bold text-2xl text-black
`;

const DescCategory = tw.p`
font-semibold text-black
`;

const DescP = tw.p`
text-black
`;

export const ProductPage = () => {
  const params = useParams();
  async function fetcher(url: string) {
    const fetchedData = await axios.get(url);
    return fetchedData.data;
  }
  const { data } = useSWR('post', () => fetcher(API_URL));
  const current = data.find((item: any) => item.id == params.docId);
  return (
    <Section>
      <Article>
        <img
          src={current.image}
          alt={current.title}
          className="w-56 h-56 rounded"
        />
        <DescDiv>
          <DescTitle>{current.title}</DescTitle>
          <DescCategory>{current.category}</DescCategory>
          <DescP>{current.company}</DescP>
          <DescP>{current.description}</DescP>
        </DescDiv>
      </Article>
    </Section>
  );
};
