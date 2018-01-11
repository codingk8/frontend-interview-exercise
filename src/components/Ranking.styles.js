import styled from 'styled-components';
import { neutrals, spacings } from '../theme';

// TODO: This component needs some more styles
export const StyledRanking = styled.ol`
  max-width: 613px;
  border-radius: 4px; //
  box-shadow: 0px 1px 8px #dae2e6; //
  margin: 0 auto;
  padding: 0;
  background-color: ${neutrals.lightest};
  font: Lato; //
  font-size: 13px; //
  color: 2c2d30; //

  > li {
    counter-increment: item;
    display: flex; //
    align-item: center; //
    justify-content: center; //
    height: 84px; //
    background-color: #F7F9FB; //

    :nth-child(odd) {
      background-color: ${neutrals.lightest}; //
    }

    ::before {
      content: counter(item);
      margin-right: ${spacings.m}px;
      margin-left: 40px; //
      font-weight: semi-bold; //
    }

    // Pour mettre le nom en gras mais pour l'instant ça ne fonctionne pas
    ::after {
      content: userName(item); //
      font-weight: bold; //
    }

    :nth-child(1)::after,
    :nth-child(2)::after,
    :nth-child(3)::after {
      font-size: 16px;
      margin-left: ${spacings.s}px;
    }

    :nth-child(1)::after {
      content: '🥇';
      margin-right: ${spacings.l}px; //
    }

    :nth-child(2)::after {
      content: '🥈';
      margin-right: ${spacings.l}px; //
    }

    :nth-child(3)::after {
      content: '🥉';
      margin-right: ${spacings.l}px; //
    }
  }
`;

export const StyledPoints = styled.span`
  margin-left: auto;
  margin-right: ${spacings.l}px; //
  font-weight: bold;
`;

export const StyledImg = styled.div`
  margin-left: ${spacings.m}px; //
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
