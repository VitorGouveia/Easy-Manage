import styled, { css } from "styled-components"

export const ClientContainer = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    "search  search  search"
    "clients clients new"
    "clients clients new"
    "clients clients new";

  grid-template-columns: 2fr 2fr 3fr;
  grid-template-rows: 100px auto;

  padding: 1rem 2rem;
  margin-top: 1rem;

  .search {
    grid-area: search;
    width: 100%;
    height: 100%;
  }

  h1 {
    color: #dedede;
    font-size: 1rem;
    text-align: center;
    width: 100%;
  }

  ul {
    grid-area: clients;
  }

  & > section {
    grid-area: new;
    display: flex;
    flex-direction: column;
    color: #dedede;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
`

export const NewClientForm = styled.form`
  width: 100%;
  max-width: 400px;
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
    input {
      border-radius: 0;
    }

    &:first-child input {
      border-radius: 0.5rem;
      border-end-end-radius: 0;
      border-end-start-radius: 0;
    }

    &:last-child input {
      border-radius: 0.5rem;
      border-start-start-radius: 0;
      border-start-end-radius: 0;
    }
  }
  button {
    margin-top: 2rem;
    background: ${props => props.theme.color.dodoria[100]};

    &:hover,
    &:focus {
      background: ${props => props.theme.color.dodoria[10]} !important;
    }
  }
`

type CardProps = {
  full?: boolean
}

export const Card = styled.li<CardProps>`
  ${props =>
    props.full === true
      ? css`
          width: 100%;
        `
      : css`
          width: auto;
        `}
  padding: 1rem;
  color: #dedede;
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.color.gohan[100]};

  text-align: left;
  position: relative;

  svg {
    width: 1.5rem;
    transition: all 200ms;

    &:hover {
      opacity: 0.5;
    }
  }

  button {
    border-radius: 50%;
    position: absolute;
    right: 0.4rem;

    &[data-attr="remove"] {
      bottom: 0.4rem;
    }

    &[data-attr="edit"] {
      top: 0.4rem;
    }
  }

  p {
    width: 100%;
  }

  p + strong {
    margin-top: 2rem;
  }

  strong {
    width: 100%;
    margin-bottom: 0.3rem;
  }
`

export const CardContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
