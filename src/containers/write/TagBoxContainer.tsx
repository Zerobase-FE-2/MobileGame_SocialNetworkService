import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CategoryBox from '../../components/write/CategoryBox';
import TagBox from '../../components/write/TagBox';
import { categories } from '../../lib/fakeData/categories';
import { changeField } from '../../modules/redux/writeSlice';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const { tags, category }: any = useSelector(({ write }: any) => ({
    tags: write.tags,
    category: write.category,
  }));

  const onChangeTags = (nextTags: string & string[]) => {
    dispatch(changeField({ key: 'tags', value: nextTags }));
  };

  const onChangeCategory = (e: any) => {
    dispatch(changeField({ key: 'category', value: e.target.value }));
  };

  return (
    <Wrapper>
      <TagBox onChangeTags={onChangeTags} tags={tags} />
      <CategoryBox
        onChangeCategory={onChangeCategory}
        categories={categories}
        category={category}
      />
    </Wrapper>
  );
};

export default TagBoxContainer;
