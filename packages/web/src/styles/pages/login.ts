import styled from "styled-components"

export const LoginContainer = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: calc(10% + var(--header-height)) 0 10% 0 !important;

  span {
    font-size: 9px;
    margin-bottom: 0.5rem;
    color: red;
    font-weight: bold;
    text-align: left;
    width: 100%;
  }

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
      text-align: center;
    }

    img {
      width: 60px;
    }
  }

  form {
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    width: clamp(30px, 50vw, 500px);

    align-items: center;

    @media (max-width: 320px) {
      width: 100%;
      padding: 0;
    }

    input {
      width: 100%;

      &:first-of-type {
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      &:last-of-type {
        border-start-start-radius: 0;
        border-start-end-radius: 0;
      }
    }
  }

  button {
    margin-top: 1.4rem;
    background: var(--accent);
    width: 100%;

    &:hover,
    &:focus {
      background: var(--accent-hover) !important;
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
