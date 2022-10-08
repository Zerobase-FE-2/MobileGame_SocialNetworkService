import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './app';

export const login = ({ username, password }: any) => {
  console.log('hihi');
  try {
    const user = signInWithEmailAndPassword(auth, username, password);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error);
    return error;
  }
};

export const register = async ({ username, password }: any) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, username, password);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error);
    return error;
  }
};

export const check = () => {
  console.log('check');
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log('no user');
    }
  });
  console.log('check');
};

export const logout = () => {
  console.log('logout');
};
