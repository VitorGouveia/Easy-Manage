import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  padding-top: var(--header-height);

  * {
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.6;
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const HomeContainer = styled.main`
  height: 100%;

  padding: 4rem 0;

  display: flex;
  flex-direction: column;

  gap: 10rem;

  align-items: center;
  justify-content: flex-start;
`

export const TitleBox = styled.article`
  width: 80%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    color: #fff;
    text-shadow: 1px 1px black;
    font-size: 72px;
    font-size: clamp(1.1rem, 1rem + 3.2558vw, 4.5rem);

    strong {
      color: var(--accent);
    }
  }

  p {
    margin: 2rem 0;
    width: 30ch;
    font-size: clamp(0.6rem, 0.2721rem + 1.0233vw, 1.5rem);
  }

  button {
    font-size: 1.2rem;
    font-weight: 700;
    background: var(--accent);

    &:hover {
      background: var(--accent-hover);
    }
  }

  @media (max-width: 450px) {
    text-align: left;
    align-items: flex-start;

    button {
      font-size: 1rem;
      padding: 1rem 2.5rem;
    }
  }

  @media (max-width: 375px) {
    button {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`

export const FeaturesBox = styled.section`
  width: 100%;

  padding: 1rem;

  background: #000;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;

  padding: 2rem;
`

export const Spec = styled.article`
  padding: 4rem;

  display: flex;
  flex-direction: column;

  summary {
    font-size: 32px;
    color: #fff;
    font-weight: 700;
  }

  p {
    margin-top: 1rem;
    font-size: clamp(0.6rem, 0.2721rem + 1.0233vw, 1.5rem);
  }
`

export const Hero = styled.div`
  img {
    height: 300px;
  }
`

export const FormBox = styled.section`
  width: 80%;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1.5fr;

  justify-content: space-between;

  background: var(--black);

  h2 {
    color: #ddd;
    font-size: clamp(1.1rem, 0.5rem + 3.2558vw, 3rem);
  }

  p {
    margin-top: 1rem;
    font-size: clamp(0.6rem, 0.2721rem + 1.0233vw, 1.5rem);
  }
`

export const Form = styled.form`
  padding: 1rem;
  position: relative;

  display: grid;
  grid-template-areas:
    "input"
    "input"
    "input"
    "button";

  row-gap: 0.8rem;

  * {
    z-index: 2;
  }

  &::before {
    content: "";

    position: absolute;
    --border-spacing: -1px;
    border-radius: 1rem;
    top: var(--border-spacing);
    left: var(--border-spacing);
    right: var(--border-spacing);
    bottom: var(--border-spacing);

    border: 3px solid #dcdce6;
  }

  button {
    background: var(--accent);

    &:hover {
      background: var(--accent-hover);
    }
  }
`
