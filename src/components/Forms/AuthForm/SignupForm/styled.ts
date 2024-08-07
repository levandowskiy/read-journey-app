import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS, SIZES } from '../../../../styles/theme';
import StyledButton from '../../../StyledButton';
import { CircularProgress } from '@mui/material';

export const Form = styled.form`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputsWrapper = styled.div`
  & > :not(:first-of-type) {
    margin-top: 14px;
  }
`;

export const WrapperButton = styled.div``;

export const Button = styled(StyledButton)`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.DARK_GRAY};
  width: 225px;
  height: 52px;
  font-size: ${SIZES.FONT.BIG};
  line-height: 20px;

  &:hover {
    color: ${COLORS.WHITE};
  }

  &:disabled {
    color: ${COLORS.LIGHT_GRAY};
    cursor: not-allowed;
    pointer-events: auto;
    background-color: transparent;
  }
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.LIGHT_GRAY};
  margin-left: 20px;
  text-decoration: underline;
`;

export const CircularProgressStyle = styled(CircularProgress)`
  .MuiCircularProgress-circle {
    color: ${COLORS.GREEN};
  }
`;
