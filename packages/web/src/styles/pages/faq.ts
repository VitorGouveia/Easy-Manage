import styled, { css } from "styled-components"

export const FaqContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const QuestionContainer = styled.article`
  width: 80%;
  height: 100%;

  padding: clamp(1rem, 2vmax, 4rem);

  display: flex;
  flex-direction: column;
  row-gap: 2.2rem;

  article {
    display: flex;
    flex-direction: column;

    row-gap: 1rem;
  }
`

export const QuestionTitle = styled.h1`
  color: #fff;
`

export const QuestionDescription = styled.h4`
  font-weight: 400;
  color: gray;
  width: 40ch;
`

export const QuestionItem = styled.details`
  color: #fff;
  cursor: pointer;

  border: 2px solid var(--p);
  border-radius: 0.4rem;
  transition: var(--short-ms);

  summary {
    padding: 1rem;
    transition: var(--short-ms);

    &::-webkit-details-marker {
      transition: var(--short-ms);
    }
  }

  & > div {
    padding: 0.6rem 1rem 1rem;
    border-top: 1px solid transparent;

    p {
      line-height: 28px;
      font-weight: 400;
    }
  }

  &:hover {
    border-color: var(--accent);
    summary {
      border-radius: 0.4rem;

      &::marker {
        color: var(--accent);
      }
    }
  }

  &[open] {
    border-color: var(--accent);

    summary {
      &::marker {
        color: var(--accent);
      }

      & ~ div {
        border-color: var(--input);
        animation: sweep calc(var(--short-ms) * 2.125) ease;
      }
    }
  }

  @keyframes sweep {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`
