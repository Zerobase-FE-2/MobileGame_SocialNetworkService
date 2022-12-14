import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import PostList from '../../components/posts/PostsList';
import { boards } from '../../lib/fakeData/boards';
import { categories } from '../../lib/fakeData/categories';

import { users } from '../../lib/fakeData/user';
import { useAppDispatch, useAppSelector } from '../../modules/redux/hook';
import { LIST_POSTS } from '../../modules/redux/postsSlice';

const PostListContainer = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const { posts, error, loading } = useAppSelector(
    ({ posts, loading }: { posts: any; loading: any }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
    })
  );
  const user = users[0];

  useEffect(() => {
    const tag = searchParams.get('tag');
    const page = parseInt(searchParams.get('page') as string, 10) || 1;
    const category = searchParams.get('category');
    dispatch(LIST_POSTS({ tag, username, page, category }));
  }, [dispatch, searchParams, username]);

  return (
    <>
      <PostList
        loading={loading}
        error={error}
        posts={posts}
        showWriteButton={user}
        categories={categories}
        boards={boards}
      />
    </>
  );
};

export default PostListContainer;
