import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  padding-top: var(--header-height);

  *:not(img) {
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

  @media (max-width: 300px) {
    article {
      width: 95%;
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

  @media (max-width: 375px) {
    gap: 3rem;
  }
`

export const TitleBox = styled.article`
  width: 80%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    font-family: "Sora";
    color: #fff;
    text-shadow: 1px 1px black;
    font-size: 72px;
    font-size: clamp(1.2rem, 1rem + 3.2558vw, 4.5rem);

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

  @media (max-width: 600px) {
    padding: 0;
  }
`

interface FeatureProps {
  hasLeftImg?: boolean
}

export const Feature = styled.div<FeatureProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    article {
      margin-bottom: 1rem;
    }

    ${props =>
      props.hasLeftImg &&
      css`
        flex-direction: column-reverse;
      `}
  }

  padding: 2rem;

  @media (max-width: 280px) {
    padding: 0;

    & > article {
      padding: 0;
    }
  }
`

export const Spec = styled.article`
  /* padding: 4rem; */
  padding: clamp(1rem, 2vmax, 10rem);

  display: flex;
  flex-direction: column;

  summary {
    font-size: clamp(1rem, 1rem + 0.904vw, 3rem);
    color: #fff;
    font-weight: 700;
  }

  p {
    margin-top: 1rem;
    font-size: clamp(0.6rem, 0.2721rem + 1.0233vw, 1.5rem);
  }
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 70%;
  }
`

export const FormBox = styled.section`
  width: 80%;
  max-width: 800px;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  background: var(--black);

  text-align: center;

  h2 {
    color: #ddd;
    font-size: clamp(0.6rem, 1.3rem + 0.904vw, 3rem);
  }

  p {
    margin-top: 1rem;
    font-size: clamp(0.6rem, 1.0233vw, 1.5rem);
  }
`

export const Form = styled.form`
  margin-top: 2rem;
  padding: 1rem;
  position: relative;

  display: flex;
  flex-direction: column;

  row-gap: 0.8rem;

  * {
    z-index: 2;
  }

  &::before {
    content: "";

    position: absolute;
    --border-spacing: -4px;
    border-radius: 1rem;
    top: var(--border-spacing);
    left: var(--border-spacing);
    right: var(--border-spacing);
    bottom: var(--border-spacing);

    border: 1.5px solid #dcdce6;
  }

  button {
    margin-top: 2rem;
    background: var(--accent);

    &:hover {
      background: var(--accent-hover);
    }
  }
`

export const Footer = styled.footer`
  background: #000;

  padding: 3rem 1rem;

  width: 100%;
  display: grid;
  grid-template-areas: "logo products cases";
  grid-template-columns: 1fr 1fr 1fr;

  img {
    position: relative;
    max-width: 50px;
  }
`

export const FooterTitle = styled.h4`
  font-weight: 300;
  color: #707070;
`

export const FooterList = styled.ul`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  list-style: none;

  a:hover,
  a:focus {
    transition: all 200ms;
    color: var(--accent);

    img {
      &::before {
        content: "";

        position: absolute;
        --border-spacing: -4px;
        border-radius: 1rem;
        top: var(--border-spacing);
        left: var(--border-spacing);
        right: var(--border-spacing);
        bottom: var(--border-spacing);

        border: 1.5px solid #dcdce6;
      }
    }
  }
`
