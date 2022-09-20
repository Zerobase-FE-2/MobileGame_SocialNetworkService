import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/write/TagBox';
import { changeField } from '../../modules/redux/writeSlice';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state: any) => {
    return state.write.tags;
  });

  const onChangeTags = (nextTags: string & string[]) => {
    dispatch(changeField({ key: 'tags', value: nextTags }));
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
