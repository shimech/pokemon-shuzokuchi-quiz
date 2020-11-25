import { css } from "styled-components";

export const sp = (first, ...interpolations) => css`
  @media (max-width: 560px) {
    ${css(first, ...interpolations)}
  } ;
`;

export const tab = (first, ...interpolations) => css`
  @media (min-width: 561px) and (max-width: 960px) {
    ${css(first, ...interpolations)}
  } ;
`;

export const pc = (first, ...interpolations) => css`
  @media (min-width: 961px) {
    ${css(first, ...interpolations)}
  } ;
`;
