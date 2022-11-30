import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { useState } from 'react';
import { auth, firestore } from '../../modules/firebase/app';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { doc, setDoc } from 'firebase/firestore';

const RegisterboxTitle = styled.div`
  position: absolute;
  width: 100px;
  height: 40px;
  margin: -240px auto auto 10px;
  background-color: #ffffff;
  line-height: 40px;
  border-radius: 7px;
  font-size: 24px;
`;

const Registerbox = styled.div`
  display: flex;
  width: 500px;
  height: 290px;
  margin: auto;
  margin-top: 125px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
`;

const RegisterboxBorderLine = styled.div`
  display: flex;
  width: 450px;
  height: 240px;
  margin: auto;
  border: 1px solid black;
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
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

const Registerboxtop = styled.div`
  display: flex;
  width: 450px;
  height: 150px;
  margin: auto auto 0px auto;
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Registerboxbottom = styled.div`
  display: flex;
  width: 450px;
  height: 60px;
  margin: 0px auto;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default function Register(props: any) {
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  function register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUid(user.uid);
            setDoc(doc(firestore, 'users', `${user.uid}`), {
              uid: `${user.uid}`,
              nickname: `${nickname}`,
            });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Registerbox>
      <RegisterboxBorderLine>
        <Registerboxtop>
          <InputBox>
            <div>ID : </div>
            <input
              type="text"
              placeholder="abcd123@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputBox>
          <InputBox>
            <div>PW : </div>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputBox>
          <InputBox>
            <div>nickname : </div>
            <input
              type="text"
              placeholder="nickname"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
          </InputBox>
        </Registerboxtop>
        <Registerboxbottom>
          <div>
            <Link to={'/loginpage'}>로그인하러가기</Link>
          </div>
          <div>
            <button onClick={register}>회원가입</button>
          </div>
        </Registerboxbottom>
      </RegisterboxBorderLine>
      <RegisterboxTitle>Register</RegisterboxTitle>
    </Registerbox>
  );
}
