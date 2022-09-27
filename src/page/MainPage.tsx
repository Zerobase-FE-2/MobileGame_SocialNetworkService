import HeaderContainer from '../containers/common/HeaderContainer';
import MainPageContainer from '../containers/main/MainPageContainer';
import FooterContainer from '../containers/common/FooterContainer';
import { firestore } from '../modules/firebase/app';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
const MainPage = () => {
  const docRef = doc(firestore, 'bucket', 'mobileGames');
  async function docLoad() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      console.log('NO DATA');
    }
  }

  useEffect(() => {
    docLoad();
  }, []);

  return (
    <>
      <HeaderContainer />
      <MainPageContainer />
      <FooterContainer />
    </>
  );
};

export default MainPage;
