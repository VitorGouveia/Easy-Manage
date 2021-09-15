import styled, { css } from "styled-components"

interface ButtonContainerProps {
  outlined: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  outline: 0;
  border: 0;
  color: #fff;

  font-size: clamp(0.6rem, 1vw, 1.2rem);
  font-weight: bold;
  padding: clamp(1rem, 1.4vmax, 1.8rem) 3.125rem;
  border-radius: clamp(3px, 0.3rem, 12px);

  background: gray;
  color: var(--white);

  position: relative;

  cursor: pointer;

  transition: all var(--short-ms);

  &.cta {
    background: var(--accent);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    background: var(--accent-hover);
  }

  &:focus {
    background: var(--accent-hover);

    &::after {
      content: "";

      position: absolute;
      --border-spacing: -10px;
      border-radius: 0.8rem;
      top: var(--border-spacing);
      left: var(--border-spacing);
      right: var(--border-spacing);
      bottom: var(--border-spacing);

      border: 2px solid #dcdce6;
    }
  }
  ${props =>
    props.outlined &&
    css`
      background: transparent;
      border: 1.5px solid var(--accent);

      &:hover,
      &:focus {
        background: var(--accent);
        border-color: var(--accent);
        color: #fff;
      }
    `}
`
