import styled, { css } from "styled-components";

export const AngleDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="13"
      viewBox="0 0 23 13"
      fill="none"
    >
      <path
        d="M1 1L11.5 12L22 1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export interface ISelectedcompStyle {
  $isSelected: boolean;
}

export const ArrowStyles = styled.div<ISelectedcompStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.25s;
    scale: 0.85;
  }
  ${(props) =>
    props.$isSelected &&
    css`
      svg {
        transform: rotate(180deg);
        transition: 0.25s;
      }
    `}
`;
