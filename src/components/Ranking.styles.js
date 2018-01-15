import styled from 'styled-components';
import { neutrals, spacings } from '../theme';

// TODO: This component needs some more styles
export const StyledRanking = styled.ol`
  max-width: 613px;
  margin: 0 auto;
  padding: 0;
  background-color: ${neutrals.lightest};
  border-radius: 4px; //
  box-shadow: 0px 1px 8px #dae2e6; //

  > li {
    counter-increment: item;
    display: flex; //
    align-items: center; //
    justify-content: center; //
    height: 84px; //
    font-family: Lato; //
    font-size: 13px; //
    color: 2c2d30; //
    font-weight: bold; //

    :nth-child(even) {
      background-color: #F7F9FB; //
    }

    ::before {
      content: counter(item);
      margin-right: ${spacings.m}px;
      margin-left: ${spacings.s + spacings.l}px; //
      font-weight: 600; //
    }

    :nth-child(1)::after,
    :nth-child(2)::after,
    :nth-child(3)::after {
      font-size: 16px;
      margin-left: ${spacings.s}px;
      margin-right: ${spacings.l}px; //
    }

    :nth-child(1)::after {
      content: '🥇';
    }

    :nth-child(2)::after {
      content: '🥈';
    }

    :nth-child(3)::after {
      content: '🥉';
    }

    :nth-child(n+4) {
      padding-right: ${spacings.l}px; //
    }
  }
`;

export const StyledPoints = styled.span`
  margin-left: auto;
`;

export const StyledImg = styled.div`
  margin-right: ${spacings.s + spacings.m}px; //
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(245, 247, 250, 0.95);
  display: flex;
  padding: ${spacings.m}px;
  justify-content: space-between;
  font-size: 19px;
  line-height: 30px;
  margin-left: ${spacings.s}px;
  color: ${neutrals.darkest};

  > h1 {
    font-weight: 500;
    display: flex;
    margin-right: ${spacings.m}px;
  }
`;

export const StyledContent = styled.main`
  padding: 16px;
  background-color: rgb(245, 247 ,250);
  padding-top: 106px;
`;
