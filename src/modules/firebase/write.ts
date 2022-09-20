import sanitizeHtml from 'sanitize-html';
import { ref, child, get, set, push, onValue, query } from 'firebase/database';
import { database } from './app';

import { v4 as uuidv4 } from 'uuid';
import { users } from '../../lib/fakeData/user';
import { sanitizeOption } from '../../lib/api/posts';

export const writePost = async ({
  title,
  body,
  tags,
}: {
  title: string;
  body: string;
  tags: string[];
}) => {
  const uid = uuidv4();
  const publishedDate = Date.now();
  try {
    await set(ref(database, 'posts/' + uid), {
      _id: uid,
      title,
      body,
      tags,
      publishedDate,
      user: {
        username: users[0].username,
        _id: users[0]._id,
      },
    });
  } catch (e) {
    console.error(e);
  }

  return {
    title,
    body,
    tags,
    user: {
      username: users[0].username,
      _id: users[0]._id,
    },
    _id: uid,
    publishedDate,
    __v: 0,
  };
  //return 해주는 값이 저장된다.
};

export const readPost = async (id: string) => {
  const dbRef = ref(database);
  try {
    const response = await get(child(dbRef, `posts/${id}`));

    if (response.exists()) {
      return response.val();
    }
  } catch (e) {
    console.error(e);
  }
};

export const listPosts = async () => {
  const postRef = ref(database);
  try {
    const response = await get(child(postRef, `posts/`));
    if (response.exists()) {
      return response.val();
    }
  } catch (e) {
    console.error(e);
  }
};

export const updatePost = () => {};
