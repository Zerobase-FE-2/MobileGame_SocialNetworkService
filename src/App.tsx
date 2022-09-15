import { Outlet } from 'react-router-dom';

import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';

import tw from 'tailwind-styled-components';

const RootDiv = tw.div`
relative box-border
`;

function App() {
  return (
    <RootDiv>
      <Navbar />
      <Outlet />
      <Footer />
    </RootDiv>
  );
}

export default App;
