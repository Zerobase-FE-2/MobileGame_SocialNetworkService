import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
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

export const removeProduct = async ({ id }: any) => {
  const dbRef = doc(firestore, 'bucket', 'mobileGames');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().gameList;
      let post = posts.find((item: any) => item.id == id);
      await updateDoc(dbRef, {
        gameList: arrayRemove(post),
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const readComment = async () => {
  const dbRef = doc(firestore, 'bucket', 'gameComments');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().comments;
      return posts;
    }
  } catch (error) {
    console.error(error);
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
          commenter: contents.commenter,
        },
        date: date,
        group: group,
        id: id,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateComment = async ({ comment, desc }: any) => {
  const dbRef = doc(firestore, 'bucket', 'gameComments');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().comments;
      let post = posts.find((item: any) => item.id === comment.id);
      await updateDoc(dbRef, {
        comments: arrayRemove(post),
      });
    }
    await updateDoc(dbRef, {
      comments: arrayUnion({
        contents: {
          comment: desc,
          commenter: comment.contents.commenter,
        },
        date: comment.date,
        group: comment.group,
        id: comment.id,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeComment = async ({ item }: any) => {
  const dbRef = doc(firestore, 'bucket', 'gameComments');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().comments;
      let post = posts.find((comment: any) => comment.id == item);
      await updateDoc(dbRef, {
        comments: arrayRemove(post),
      });
    }
  } catch (error) {
    console.error(error);
  }
};
