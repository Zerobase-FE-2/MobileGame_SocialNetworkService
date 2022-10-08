import { ref, child, get, set, update, remove } from 'firebase/database';
import { database } from './app';

import { v4 as uuidv4 } from 'uuid';
import { users } from '../../lib/fakeData/user';

const filterObject = (obj: any, filter: any, filterValue: any) =>
  Object.keys(obj).reduce((acc, val) => {
    return obj[val][filter] !== filterValue
      ? acc
      : {
          ...acc,
          [val]: obj[val],
        };
  }, {});

const filterObjectInObject = (
  obj: any,
  filter: any,
  depthFiletr: any,
  filterValue: any
) =>
  Object.keys(obj).reduce((acc, val) => {
    return obj[val][filter][depthFiletr] !== filterValue
      ? acc
      : {
          ...acc,
          [val]: obj[val],
        };
  }, {});

const filterIncludeObject = (obj: any, filter: any, filterValue: any) =>
  Object.keys(obj).reduce((acc, val) => {
    return !obj[val][filter].includes(filterValue)
      ? acc
      : {
          ...acc,
          [val]: obj[val],
        };
  }, {});

export const writePost = async ({
  title,
  body,
  tags,
  category,
  user,
}: {
  title: string;
  body: string;
  tags: string[];
  category: string;
  user: any;
}) => {
  const uid = uuidv4();
  const publishedDate = Date.now();
  try {
    await set(ref(database, 'posts/' + uid), {
      _id: uid,
      title,
      body,
      tags,
      category,
      publishedDate,
      user: {
        username: user.email,
        _id: user.uid,
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

export const listPosts = async ({ username, tag, category }: any) => {
  const postRef = ref(database);
  try {
    const response = await get(child(postRef, `posts/`));
    if (response.exists()) {
      let posts = response.val();

      if (username) {
        posts = filterObjectInObject(posts, 'user', 'username', username);
      }
      if (tag) {
        posts = filterIncludeObject(posts, 'tags', tag);
      }
      if (category && category !== 'all') {
        posts = filterObject(posts, 'category', category);
      }

      return posts;
    }
  } catch (e) {
    console.error(e);
  }
};

export const updatePost = ({
  id,
  title,
  body,
  tags,
  category,
  publishedDate = Date.now(),
}: any) => {
  const postData = {
    title,
    body,
    tags,
    category,
    user: {
      username: users[0].username,
      _id: users[0]._id,
    },
    _id: id,
    publishedDate,
    __v: 0,
  };

  const updates: any = {};
  updates['/posts/' + id] = postData;
  update(ref(database), updates);
  return postData;
};

export const removePost = async (id: any) => {
  const dbRef = ref(database);
  try {
    await remove(child(dbRef, `posts/${id}`));
  } catch (e) {
    console.error(e);
  }
};
