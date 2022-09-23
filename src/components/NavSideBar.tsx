import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  clicked: boolean;
  setClicked(clicked: boolean): void;
}

const SideBar = styled.ul`
  position: absolute;
  width: 12rem;
  height: 100vh;
  background-color: #aadbff;
`;

const SideBarList = styled.li`
  padding: 1rem 0.5rem;
  color: white;
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
