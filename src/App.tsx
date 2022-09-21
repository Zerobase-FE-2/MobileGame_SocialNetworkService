import { Outlet } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

import { Navbar } from './components/NavBar';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';

import tw from 'tailwind-styled-components';

export const API_URL =
  'https://run.mocky.io/v3/3c8d01cf-810b-4471-8d45-62f8911aad8f';

const RootDiv = tw.div`
relative box-border
`;

function App() {
  async function fetcher(url: string) {
    const fetchedData = await axios.get(url);
    return fetchedData.data;
  }
  const { data, error } = useSWR('post', () => fetcher(API_URL));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <RootDiv>
      <Navbar />
      <Carousel docs={data} />
      <Outlet />
      <Footer />
    </RootDiv>
  );
}

export default App;
