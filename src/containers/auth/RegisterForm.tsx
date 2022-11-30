import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  REGISTER,
} from '../../modules/redux/authSlice';

import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { CHECK } from '../../modules/redux/userSlice';

const RegisterForm = () => {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const { form, auth, authError, user } = useAppSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const navigate = useNavigate();

  const onChange = (e: any) => {
    const { value, name } = e.target;
    dispatch(
      CHANGE_FIELD({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(CHANGE_FIELD({ form: 'register', key: 'password', value: '' }));
      dispatch(
        CHANGE_FIELD({ form: 'register', key: 'passwordConfirm', value: '' })
      );
      return;
    }
    console.log('submit');
    dispatch(REGISTER({ username, password }));
  };

  useEffect(() => {
    dispatch(INITIALIZE_FORM('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      dispatch(CHECK(auth.user));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
