import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { NavSideBar } from './NavSideBar';

import tw from 'tailwind-styled-components';

const Nav = tw.nav`
w-full h-10 flex justify-between items-center bg-blue-600
`;

const Logo = tw.h1`
text-white font-bold ml-4
`;

const Login = tw.span`
text-white font-semibold mr-4 flex-end
`;

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="flex items-center">
        {clicked ? (
          <XMarkIcon
            onClick={() => setClicked(!clicked)}
            className="w-8 h-10 pl-2 text-white bg-blue-600"
          />
        ) : (
          <Bars3Icon
            onClick={() => setClicked(!clicked)}
            className="w-8 h-10 pl-2 text-white bg-blue-600"
          />
        )}
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
      </div>
      {clicked && <NavSideBar clicked={clicked} setClicked={setClicked} />}
    </>
  );
};
