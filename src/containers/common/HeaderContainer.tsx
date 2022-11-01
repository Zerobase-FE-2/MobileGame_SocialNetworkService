import Header from '../../components/common/Header';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { LOGOUT } from '../../modules/redux/userSlice';

const HeaderContainer = () => {
  const { user } = useAppSelector(({ user }) => ({ user: user.user }));
  const dispatch = useAppDispatch();
  const onLogOut = () => {
    console.log('logout');
    dispatch(LOGOUT());
  };
  return <Header user={user} onLogOut={onLogOut} />;
};

export default HeaderContainer;
