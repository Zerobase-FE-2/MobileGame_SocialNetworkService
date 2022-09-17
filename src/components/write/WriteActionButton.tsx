import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.215rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = () => {
  return (
    <WriteActionButtonBlock>
      <StyledButton cyan>포스트 등록</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
