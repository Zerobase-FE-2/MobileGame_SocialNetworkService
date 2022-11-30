import LoginForm from '../containers/auth/LoginForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';

const LoginPage = () => {
  return (
    <>
      <HeaderContainer />
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
      <FooterContainer />
    </>
  );
};

export default LoginPage;
