import styled, { css } from "styled-components"

export const Layout = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    "search  search  search"
    "content content entity"
    "content content entity"
    "content content entity";

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px auto;

  padding: 1rem 2rem;
  margin-top: 1rem;

  overflow: hidden;
  input {
    width: 100%;
    background: var(--input);
  }

  .search {
    grid-area: search;
  }

  h1 {
    color: #dedede;
    font-size: 1rem;
    text-align: center;
    width: 100%;
  }

  ul {
    grid-area: content;

    align-content: flex-start;

    list-style: none;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  & > section {
    grid-area: entity;
    display: flex;
    flex-direction: column;
    color: #dedede;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
`

export const NewEntity = styled.form`
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  input {
    border-radius: 0;
  }

  input:first-child {
    border-radius: clamp(3px, 0.3rem, 12px);
    border-end-end-radius: 0;
    border-end-start-radius: 0;
  }

  input:last-child {
    border-radius: clamp(3px, 0.3rem, 12px);
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  button {
    width: 100%;
    margin-top: 2rem;
  }
`

export const Card = styled.li`
  padding: 1rem;
  background: #0d0d0d;

  border-radius: clamp(4px, 1rem, 8px);

  position: relative;

  svg {
    position: absolute;

    cursor: pointer;

    top: 1rem;
    right: 1rem;

    transition: all 200ms;

    &:hover,
    &:focus {
      stroke: var(--accent);
    }
  }
`

export const NotFoundCard = styled.li`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
  text-align: center;

  border-radius: clamp(0.4rem, 0.8rem, 1rem);
  color: var(--white);
  font-weight: bold;
`

export const CardTitle = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:not(:first-child) {
    margin: 2rem 0 1rem 0;
  }

  h4 {
    color: var(--white);
  }
`

interface CardContentProps {
  type?: "outlined"
}

export const CardContent = styled.article<CardContentProps>`
  display: flex;

  justify-content: space-between;

  color: var(--white);

  display: grid;
  align-items: center;
  grid-template-areas:
    "img heading"
    "img email"
    "img opts";
  grid-template-columns: 30px 1fr;

  column-gap: 0.6rem;

  h6 {
    grid-area: heading;
    font-size: 15px;
  }

  p {
    grid-area: email;
    font-size: 12px;
  }

  small {
    grid-area: opts;
    font-size: 10px;
  }

  img {
    grid-area: img;
    width: 30px;
    height: auto;
  }

  ${props =>
    props.type === "outlined" &&
    css`
      grid-template-areas:
        "heading"
        "email"
        "opts";
      grid-template-columns: 100%;
      padding: 0.8rem;
      border-radius: clamp(3px, 0.3rem, 12px);
      border: 1px solid #2d2d2d;
      background: #1d1c1d;
    `}
`
