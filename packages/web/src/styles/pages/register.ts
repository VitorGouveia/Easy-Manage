import styled from "styled-components"

export const RegisterContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  place-items: center;

  span {
    font-size: 9px;
    margin-top: 0.5rem;
    color: red;
    font-weight: bold;
    text-align: left;
    width: 100%;
  }
`

export const RegisterContent = styled.div`
  width: 90%;
  padding: clamp(1rem, 10vmax, 6rem);
  /* background: #181821; */
  border: 1px solid #272735;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
  border-radius: clamp(8px, 1vmax, 12px);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: clamp(1rem, 5vmax, 6rem);
  }
`

export const RegisterSection = styled.section`
  width: 100%;
  /* max-width: 380px; */

  display: flex;
  justify-content: space-between;

  summary {
    margin: clamp(0.5rem, 2vmax, 4rem) 0 clamp(0.5rem, 1vmax, 2rem);
  }

  p {
    width: 20ch;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      width: 15%;
      height: auto;
    }

    article {
      display: grid;
      grid-template-areas:
        "title       logo"
        "description logo";

      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;

      summary {
        grid-area: title;
      }

      p {
        grid-area: description;
      }

      & > div {
        grid-area: logo;
        grid-row: 1 / 3;
      }
    }

    form {
      margin-top: 3rem;

      align-self: center;

      width: 100%;
      display: flex;
      flex-direction: column;

      align-items: stretch;
      justify-content: center;
    }
  }

  @media (max-width: 425px) {
    article {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;
      text-align: center;
      p {
        width: 100%;
      }

      & > div {
        display: none !important;
      }
    }
  }
`

export const Form = styled.form`
  width: 50%;
  max-width: 450px;

  display: flex;
  flex-direction: column;

  align-items: stretch;
  justify-content: center;

  input {
    margin-top: 0.8rem;
  }

  button {
    margin-top: 0.8rem;
  }
`
