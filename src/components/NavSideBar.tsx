import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';

interface props {
  clicked: boolean;
  setClicked(clicked: boolean): void;
}

const SideBar = tw.ul`
absolute w-48 h-full bg-blue-500
`;

const SideBarList = tw.li`
px-4 py-2 text-white
`;

export const NavSideBar = (props: props) => {
  return (
    <SideBar>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        <Link to={'/category'}>게임 리뷰</Link>
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        <Link to={'/community'}>게시판</Link>
      </SideBarList>
    </SideBar>
  );
};
