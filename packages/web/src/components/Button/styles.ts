import styled from "styled-components"

export const ButtonContainer = styled.button`
  outline: 0;
  border: 0;
  color: #fff;

  padding: 1.2rem 3.125rem;
  border-radius: 0.6rem;

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
