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
        <Link to={'/category'}>전체</Link>
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        액션
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        어드벤쳐
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        롤플레잉
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        스포츠
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        레이싱
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        전략
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        인디
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        음악
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        보드
      </SideBarList>
      <SideBarList onClick={() => props.setClicked(!props.clicked)}>
        캐주얼
      </SideBarList>
    </SideBar>
  );
};
