import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CategoryBlock = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  width: 130px;
  background-color: white;
  border-radius: 10px;
  li {
    list-style: none;
    text-align: center;
    padding: 0.3rem 0;
    width: 100%;

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

const Category = ({ categories }: { categories: string[] }) => {
  return (
    <CategoryBlock>
      <span>카테고리</span>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </CategoryBlock>
  );
};

export default Category;
