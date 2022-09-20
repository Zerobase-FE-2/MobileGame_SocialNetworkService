import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/posts/Pagenation';
import { useAppSelector } from '../../modules/redux/hook';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const { username } = useParams();
  const tag = searchParams.get('tag');
  const page = parseInt(searchParams.get('page') as string, 10) || 1;

  const { lastPage, posts, loading } = useAppSelector(
    ({ posts, loading }: { posts: any; loading: any }) => ({
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
    })
  );
  if (!posts || loading) return null;

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
