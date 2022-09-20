import { Link } from 'react-router-dom';
import styled, { css, CSSProperties } from 'styled-components';
import palette from '../../lib/styles/palette';

interface subInfo {
  username: string;
  publishedDate: any;
  hasMarginTop: any;
}

const SubInfoBlock = styled.div`
  ${(props: subInfo) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color:${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }: subInfo) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};
export default SubInfo;
