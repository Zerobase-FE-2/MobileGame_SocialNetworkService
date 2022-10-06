import styled from 'styled-components';
import palette from '../../lib/styles/palette';

import { Link } from 'react-router-dom';

const CategoryBlock = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  width: 130px;
  max-height: 320px;
  background-color: white;
  border-radius: 10px;
  li {
    list-style: none;
    text-align: center;
    padding: 0.3rem 0;
    width: 100%;
    display: flex;

    &:hover {
      cursor: pointer;
      background-color: ${palette.blue[5]};
    }
  }

  span {
    font-weight: 700;
    text-align: center;
    padding-bottom: 3px;
    margin-bottom: 3px;
    border-bottom: 0.5px solid whitesmoke;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryLink = styled(Link)`
  flex: 1 1 0;
`;

const Category = ({
  categories,
}: {
  categories: { name: string; url: string }[];
}) => {
  return (
    <CategoryBlock>
      <span>카테고리</span>
      {categories.map((category) => (
        <li key={category.name}>
          <CategoryLink to={`?category=${category.url}`}>
            {category.name}
          </CategoryLink>
        </li>
      ))}
    </CategoryBlock>
  );
};

export default Category;
