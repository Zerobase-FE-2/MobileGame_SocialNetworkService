import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CategoryBlock = styled.div`
  flex: 1 1 0;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;
const CategorySelect = styled.select`
  display: flex;

  width: 256px;
  height: 36px;
  padding-left: 0.5rem;

  border: 1px solid ${palette.gray[9]};
  border-radius: 4px;
  font-size: 18px;
`;

const CategoryBox = ({
  onChangeCategory,
  categories,
  category = '전체',
}: any) => {
  return (
    <CategoryBlock>
      <h4>카테고리</h4>
      <CategorySelect onChange={onChangeCategory} value={category}>
        {categories.map((category: any) => (
          <option value={category.url} key={category.url}>
            {category.name}
          </option>
        ))}
      </CategorySelect>
    </CategoryBlock>
  );
};

export default CategoryBox;
