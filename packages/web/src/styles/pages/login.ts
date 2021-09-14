import styled from "styled-components"

export const LoginContainer = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: calc(10% + var(--header-height)) 0 10% 0 !important;

  header {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 1rem;

    h1 {
      margin-top: 1rem;
      font-size: 2rem;
      color: #dedede;
    }

    img {
      width: 60px;
    }
  }

  form {
    width: 100%;
    padding: 1rem;

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    & > div label {
      &:first-child input {
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      &:last-child input {
        border-start-start-radius: 0;
        border-start-end-radius: 0;
      }
    }

    button {
      margin-top: 1.4rem;
      background: var(--accent);

      &:hover,
      &:focus {
        background: var(--accent-hover) !important;
      }
    }
  }

  footer {
    width: 100%;
    padding: 1rem;

    display: flex;

    align-items: center;
    justify-content: flex-start;

    small {
      margin-left: 0.4rem;
      color: #dedede;
    }
    &:hover {
      small {
        text-decoration: underline;
      }
      cursor: pointer;
      filter: brightness(120%);
    }
  }
`
