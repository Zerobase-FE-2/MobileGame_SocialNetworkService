import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { NavSideBar } from './NavSideBar';

import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #aadbff;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: 600;
  margin-left: 1rem;
`;

const Login = styled.span`
  font-weight: 600;
  margin-right: 1rem;
`;

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Div>
        {/* {clicked ? (
          <XMarkIcon
            onClick={() => setClicked(!clicked)}
            className="w-8 h-10 pl-2 text-white bg-blue-600"
          />
        ) : (
          <Bars3Icon
            onClick={() => setClicked(!clicked)}
            className="w-8 h-10 pl-2 text-white bg-blue-600"
          />
        )} */}
        <Nav>
          <Logo>
            <Link to={'/'}>MobileGame-SNS</Link>
          </Logo>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="검색어를 입력해주세요."
          />
          <Login>Login</Login>
        </Nav>
      </Div>
      {clicked && <NavSideBar clicked={clicked} setClicked={setClicked} />}
    </>
  );
};
