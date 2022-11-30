import { Oval } from 'react-loader-spinner';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const SpinnerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = () => {
  return (
    <SpinnerDiv>
      <Oval
        width={100}
        height={100}
        color={palette.blue[0]}
        secondaryColor={palette.blue[1]}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </SpinnerDiv>
  );
};

export default Spinner;
