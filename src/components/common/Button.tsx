import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

import { Link } from 'react-router-dom';

interface MyComponentsProps {
  fullWidth?: boolean;
  cyan?: number;
  to?: string;
}

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
  }
  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${(props: MyComponentsProps) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `};

  ${(props: MyComponentsProps) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle};
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props: any) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
