import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../style/variables';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoIcon = styled.svg`
  width: 42px;
  height: 74px;
`;

export const LogoText = styled.div`
  font-size: ${SIZES.FONT.REGULAR};
  font-weight: ${SIZES.WEIGHT.W700};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  text-transform: uppercase;
  color: ${COLORS.WHITE};
`;
