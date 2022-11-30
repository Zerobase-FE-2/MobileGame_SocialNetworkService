import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { product } from '../redux/productsSlice';
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
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async ({ product }: { product: product }) => {
  const dbRef = doc(firestore, 'bucket', 'mobileGames');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().gameList;
      let post = posts.find((item: product) => item.id == product.id);
      await updateDoc(dbRef, {
        gameList: arrayRemove(post),
      });
    }
    await updateDoc(dbRef, {
      gameList: arrayUnion(product),
    });
    const result = await getDoc(dbRef);
    if (result.exists()) {
      let posts = result.data().gameList;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeProduct = async ({ id }: { id: number }) => {
  const dbRef = doc(firestore, 'bucket', 'mobileGames');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().gameList;
      let post = posts.find((item: product) => item.id == id);
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
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().comments;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateComment = async ({
  data,
  desc,
}: {
  data: comment;
  desc: string;
}) => {
  const dbRef = doc(firestore, 'bucket', 'gameComments');
  try {
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().comments;
      let post = posts.find((item: comment) => item.id === data.id);
      await updateDoc(dbRef, {
        comments: arrayRemove(post),
      });
    }
    await updateDoc(dbRef, {
      comments: arrayUnion({
        contents: {
          comment: desc,
          commenter: data.contents.commenter,
        },
        date: data.date,
        group: data.group,
        id: data.id,
      }),
    });
    const result = await getDoc(dbRef);
    if (result.exists()) {
      let posts = result.data().comments;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeComment = async ({ data }: { data: comment }) => {
  const dbRef = doc(firestore, 'bucket', 'gameComments');
  try {
    await updateDoc(dbRef, {
      comments: arrayRemove(data),
    });
    const response = await getDoc(dbRef);
    if (response.exists()) {
      let posts = response.data().comments;
      return posts;
    }
  } catch (error) {
    console.error(error);
  }
};
