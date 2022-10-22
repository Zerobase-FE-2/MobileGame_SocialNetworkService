import { ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { database } from './app';

export const writeComment = async ({ text, user, postId }: any) => {
  console.log(text, user, postId);
  const uid = uuidv4();
  const publishedDate = Date.now();
  try {
    await set(ref(database, `comments/` + `${postId}/` + uid), {
      _id: uid,
      text,
      publishedDate,
      user: { username: user.email, _id: user.uid },
      postId,
    });
  } catch (e) {
    console.error(e);
  } finally {
    return {
      _id: uid,
      postId,
      publishedDate,
      text,
      user: { _id: user.uid, username: user.email },
    };
  }
};

export const readComments = () => {
  console.log('read');
};

export const updateComment = () => {
  console.log('update');
};

export const removeComment = () => {
  console.log('remove');
};
