import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';

import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButton from '../components/write/WriteActionButton';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButton />
    </Responsive>
  );
};

export default WritePage;
