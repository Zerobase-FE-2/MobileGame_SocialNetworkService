import tw from 'tailwind-styled-components';

const Nav = tw.nav`
min-w-full h-10 flex justify-between items-center bg-blue-600
`;

const Logo = tw.h1`
text-white font-bold ml-4
`;

const Login = tw.span`
text-white font-semibold mr-4
`;

export const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>MobileGame-SNS</Logo>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="검색어를 입력해주세요."
        />
        <Login>Login</Login>
      </Nav>
    </>
  );
};
