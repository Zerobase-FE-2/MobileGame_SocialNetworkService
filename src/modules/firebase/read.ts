import { uuidv4 } from '@firebase/util';
import {
  doc,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { comment } from '../redux/commentSlice';
import { firestore } from './app';

export const readProduct = async () => {
  const dbRef = doc(firestore, 'bucket', 'mobileGames');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().gameList;
      return posts;
    }
  } catch (e) {
    console.error(e);
  }
};

export const createComment = async ({
  contents,
  group,
  id,
  date = Date.now(),
}: comment) => {
  const dbRef = doc(firestore, 'bucket', 'gameComments');
  try {
    await updateDoc(dbRef, {
      comments: arrayUnion({
        contents: {
          comment: contents.comment,
          commneter: contents.commenter,
        },
        date: date,
        group: group,
        id: id,
      }),
    });
  } catch (error) {
    console.error(error);
  }
  // return {
  //   contents: {
  //     comment: contents.comment,
  //     commneter: contents.commenter,
  //   },
  //   date: date,
  //   group: group,
  //   id: id,
  // };
};
