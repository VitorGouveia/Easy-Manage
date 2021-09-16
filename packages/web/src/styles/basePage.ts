import styled, { css } from "styled-components"

export const Layout = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    "search  search  search  search  entity"
    "content content content content content"
    "content content content content content"
    "content content content content content";

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  gap: 2rem;

  padding: 1rem 2rem;
  margin-top: 1rem;

  overflow: hidden;

  @media (max-width: 475px) {
    grid-template-areas:
      "search  entity"
      "content content";

    overflow: auto;

    & > section form {
      padding: 0;
    }

    ul {
      margin-top: 4rem;
    }

    grid-template-columns: 1fr;
    grid-template-rows: 40px auto;
    row-gap: 2rem;
  }

  input {
    width: 100%;
    background: var(--input);
  }

  .search {
    width: 100%;
    grid-area: search;
    position: relative;

    input {
      height: 100%;
    }

    input:focus ~ svg {
      stroke: var(--accent);
    }

    svg {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translate(-50%, -50%);
      transition: all 200ms;
    }
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

    @media (min-width: 475px) {
      overflow-y: auto;
    }

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  & > section {
    grid-area: entity;
    display: flex;
    flex-direction: column;
    color: #dedede;
    align-items: flex-end;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    button {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
    }
  }

  span {
    font-size: 9px;
    margin-bottom: 0.5rem;
    color: red;
    font-weight: bold;
    text-align: left;
  }
`

export const NewEntityWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: clamp(0.6rem, 2vmax, 2rem) 0;
`

export const NewEntity = styled.form`
  width: 80%;
  height: 100%;

  display: grid;
  grid-template-areas:
    "name   phoneNumber phoneNumber"
    "city   street      houseNumber"
    "opts   opts        opts"
    "button button    button";

  @media (max-width: 475px) {
    grid-template-areas:
      "name"
      "phoneNumber"
      "city"
      "street"
      "houseNumber"
      "opts"
      "button";

    grid-template-columns: 1fr;
    gap: 0;

    input {
      border-radius: 0;

      &:first-child {
        border-top-left-radius: clamp(3px, 0.3rem, 12px);
        border-top-right-radius: clamp(3px, 0.3rem, 12px);
      }
    }

    button {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  align-items: center;

  gap: 1rem;

  input {
    width: 100%;

    &#name {
      grid-area: name;
    }

    &#phoneNumber {
      grid-area: phoneNumber;
    }

    &#city {
      grid-area: city;
    }

    &#street {
      grid-area: street;
    }

    &#houseNumber {
      grid-area: houseNumber;
    }

    &#opts {
      grid-area: opts;
    }
  }

  button {
    grid-area: button;
    width: 100%;
  }
`

export const SheetButton = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 80%;
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

    &[data-icon] {
      top: 3rem;
    }

    &[data-icon="check"] {
      &:hover,
      &:focus {
        stroke: var(--green);
      }
    }

    &.no-display {
      display: none;
    }

    transition: all var(--short-ms);

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
  align-items: center;

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
