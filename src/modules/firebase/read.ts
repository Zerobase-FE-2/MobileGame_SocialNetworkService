import { doc, getDoc } from 'firebase/firestore';
import { firestore } from './app';

export const readProduct = async () => {
  const dbRef = doc(firestore, 'bucket', 'mobileGames');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = { ...response.data().gameList };
      console.log(posts);

      return posts;
    }
  } catch (e) {
    console.error(e);
  }
};
