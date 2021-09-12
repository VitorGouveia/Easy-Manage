import styled from "styled-components"

export const ButtonContainer = styled.button`
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
      --border-spacing: -9px;
      border-radius: 1rem;
      top: var(--border-spacing);
      left: var(--border-spacing);
      right: var(--border-spacing);
      bottom: var(--border-spacing);

      border: 3px solid #dcdce6;
    }
  }
`
