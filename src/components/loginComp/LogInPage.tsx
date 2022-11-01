import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react'
import {useState} from 'react'
import { auth } from '../../modules/firebase/app';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'

const LoginboxTitle = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  margin: -200px auto auto 10px;
  background-color: #ffffff;
  line-height: 40px;
  border-radius: 7px;
  font-size: 24px;
`;

const Loginbox = styled.div`
  display: flex;
  width: 500px;
  height: 250px;
  margin: auto;
  margin-top: 125px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
`;

const LoginboxBorderLine = styled.div`
  display: flex;
  width: 450px;
  height: 200px;
  margin: auto;
  border: 1px solid black;
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IdBox = styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  margin: 5px auto;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PasswordBox = styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  margin: 5px auto;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Loginboxtop = styled.div`
  display: flex;
  width: 450px;
  height: 90px;
  margin: auto auto 0px auto;
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loginboxbottom = styled.div`
  display: flex;
  width: 450px;
  height: 60px;
  margin: 0px auto;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

// interface AccountType {
//   email:string,
//   password:string
// }

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // ...
//     navigate('/')
//   } else {
//     // User is signed out
//     // ...
//   }
// });

function login(){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    navigate('/productPage');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("아이디/비밀번호가 다릅니다");
  });
}

  
  return (
    <Loginbox>
      <LoginboxBorderLine>
        <Loginboxtop>
          <IdBox>
            <div>ID : </div><input type="text" placeholder='abcd123@email.com' onChange={(e)=>{setEmail(e.target.value)}}/>
          </IdBox>
          <PasswordBox>
            <div>PW : </div><input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </PasswordBox>
        </Loginboxtop>
        <Loginboxbottom>
          <div><Link to={"/register"}>회원가입</Link></div>
          <div><button onClick={login}>로그인</button></div>
        </Loginboxbottom>
      </LoginboxBorderLine>
      <LoginboxTitle>Login</LoginboxTitle>
    </Loginbox>
  )
}
