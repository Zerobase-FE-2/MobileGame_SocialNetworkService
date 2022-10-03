import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = styled.div`
  display: flex;
  grid-row: 1 / span 2;
  grid-column: 2;
  width: 820px;
  height: fit-content;
  padding: 1rem;
  margin-top: 1rem;
  background-color: white;
  border-radius: 10px;
  figure {
    flex-shrink: 0;
    width: fit-content;
    height: full;
  }
  img {
    width: fit-content;
    border-radius: 10px;
  }
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-weight: 600;
    color: black;
    padding-top: 0;
  }
  p {
    width: full;
    height: 3rem;
    padding: 0.5rem;
    overflow: hidden;
    margin-top: 0;
  }
`;
const ProductItem = ({ post }: { post: any }) => {
  const {
    category,
    company,
    description,
    id,
    image,
    rating,
    screenshot,
    title,
  } = post;
  return (
    <Product>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <ProductDesc>
        <h2>
          <Link to={`/${id}`}>{title}</Link>
        </h2>
        <p>
          <Link to={`/${id}`}>{description}</Link>
        </p>
      </ProductDesc>
    </Product>
  );
};

const MainBoard = ({
  loading,
  posts,
  error,
}: {
  loading: any;
  posts: any;
  error: any;
}) => {
  if (posts) {
    posts = Object.values(posts);
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {!loading &&
        posts &&
        posts.map((post: any) => {
          <ProductItem post={post} />;
        })}
    </>
  );
};

export default MainBoard;
