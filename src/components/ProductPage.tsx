import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import styled from 'styled-components';
import { API_URL } from '../App';

const Section = styled.section`
min-height : full
background-color : #f1f1f1;
article {
  display : flex;
  padding : 3rem;
  background-color : white;
}
`;

const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const Title = styled.h2`
  color: black;
  font-size: xx-large;
  font-weight: 600;
  margin-top: 0;
`;

const Image = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 10px;
`;

const DescCategory = styled.p`
  color: black;
  font-weight: 600;
  margin-top: 0;
`;

const DescP = styled.p`
  color: black;
  margin-top: 0;
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
      <article>
        <Image src={current.image} alt={current.title} />
        <DescDiv>
          <Title>{current.title}</Title>
          <DescCategory>{current.category}</DescCategory>
          <DescP>{current.company}</DescP>
          <DescP>{current.description}</DescP>
        </DescDiv>
      </article>
      <div>
        <h2>Comments</h2>
        <form action="">
          <input type="text" name="review" id="reviewPlace" />
          <input type="submit" value="등록" />
        </form>
      </div>
    </Section>
  );
};
