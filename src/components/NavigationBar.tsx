import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { firestore } from '../modules/firebase/app'

const Navbar = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: #AADBFF;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const NaviButton = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-left: 10px;
  border: 0px;
  background-color: #69A5FF;
  border-radius: 7px;
`
const Logo = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  width: 60px;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
`
const LeftBox = styled.div`
  height: 60px;
  display: flex;
  background-color: #AADBFF;
`
const RightBox = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  background-color: #AADBFF;
`
const AccountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 60px;
  background-color: #69A5FF;
`
const AccountImg = styled.img`
  width: 50px;
  height: 50px;
  background-color: #3333d8;
  border-radius: 100%;
  margin: auto;
`;
const AccountName = styled.p`
  display: block;
  width: 180px;
  height: 60px;
  background-color: #69A5FF;
  text-align: center;
  line-height: 60px;
  text-overflow: ellipsis;
`;


export default function NavigationBar(props:any) {
  const {userUid} = props;
  console.log(userUid);

  return (
    <>
      <Navbar>
        <LeftBox>
          <NaviButton />
          <Logo style={{fontSize: "40px", width: "120px"}}>Logo</Logo>
          <Logo><Link to={"/loginpage"}>로그인</Link></Logo>
          <Logo><Link to={"/productpage"}>제품리스트</Link></Logo>          
          <Logo><Link to={"/addproduct"}>등록하기</Link></Logo>          
          <Logo><Link to={"/mypage"}>mypage</Link></Logo>          
        </LeftBox>
        <RightBox>
          <AccountBox>
            <AccountImg />
            <AccountName>{userUid||<Link to={"loginpage"}>로그인해주세요우</Link>}</AccountName>
          </AccountBox>
        </RightBox>
      </Navbar>
      <Outlet />
    </>
  )
}
