import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';
// import { check } from '../../modules/user';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  LOGIN,
} from '../../modules/redux/authSlice';
import { CHECK } from '../../modules/redux/userSlice';

const LoginForm = () => {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const { form, auth, authError, user } = useAppSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const navigate = useNavigate();

  const onChange = (e: any) => {
    const { value, name } = e.target;
    dispatch(CHANGE_FIELD({ form: 'login', key: name, value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
    const { username, password } = form;
    dispatch(LOGIN({ username, password }));
  };

  useEffect(() => {
    dispatch(INITIALIZE_FORM('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      console.log(auth);
      dispatch(CHECK(auth.user));
    }
  }, [auth, authError, dispatch]);

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
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
