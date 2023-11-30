import styled, { css } from 'styled-components';

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    row-gap: 16px;
  }
`;

export const titleStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  max-width: 286px;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 368px;
    &::after {
      height: 87px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    row-gap: 16px;
    max-width: 491px;
  }
`;

export const AmountEnergyProduced = styled.p`
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 1;

  & span {
    margin-right: 8px;
    font-family: ${({ theme }) => theme.fonts.title.bold};
    font-size: ${({ theme }) => theme.fontSizes[11]};
    line-height: 1;
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    & span {
      margin-right: 24px;
      font-size: ${({ theme }) => theme.fontSizes[13]};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[11]};
    & span {
      font-size: ${({ theme }) => theme.fontSizes[14]};
    }
  }
`;
