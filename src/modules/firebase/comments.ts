import { child, get, ref } from 'firebase/database';
import { database } from './app';

export const listComments = async ({ postId }: any) => {
  const commentRef = ref(database);
  try {
    const response = await get(child(commentRef, `comments/${postId}`));
    if (response.exists()) {
      return response.val();
    }
  } catch (e) {
    console.error(e);
  }
};
