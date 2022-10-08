import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/posts/Pagenation';
import { useAppSelector } from '../../modules/redux/hook';

const DEFAULT_PAGE = 1;
const PAGE_PER_POST = 5;

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');
  const { username } = useParams();

  const { posts, loading } = useAppSelector(
    ({ posts, loading }: { posts: any; loading: any }) => ({
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
    })
  );

  if (!posts || loading) return null;
  const page = parseInt(searchParams.get('page') as string, 10) || DEFAULT_PAGE;
  const lastPage = Math.ceil(Object.keys(posts).length / PAGE_PER_POST);

  return (
    <Pagination
      tag={tag as string}
      username={username as string}
      page={page}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
