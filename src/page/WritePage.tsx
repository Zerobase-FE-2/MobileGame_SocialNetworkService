import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';

import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Helmet>
          <title>글 작성하기</title>
        </Helmet>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonContainer />
      </Responsive>
      <FooterContainer />
    </>
  );
};

export default WritePage;
