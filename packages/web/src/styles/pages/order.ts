import styled from "styled-components"

export const OrderContainer = styled.section`
  width: 100%;
  height: 100%;

  padding: 1rem 2rem;
  margin-top: 1rem;

  position: relative;

  display: grid;
  grid-template-areas:
    "table table table table btn"
    "table table table table ."
    "table table table table .";

  grid-template-columns: repeat(4, 1fr) 0.2fr;
  grid-template-rows: 52px auto;
  gap: 1rem;

  & > div {
    position: absolute;
    right: 0;

    width: 100%;
    height: 100%;

    align-items: stretch;

    button {
      padding: 0;
      width: 100%;
      height: 100%;
    }

    grid-area: btn;
  }

  & > section {
    grid-area: table;
  }
`

export const NewOrder = styled.form`
  width: 80%;
  height: 100%;

  display: grid;

  grid-template-areas:
    "quantity    quantity  quantity"
    "itemLabel   .         ."
    "item        item      itemqtd"
    "clientLabel .         ."
    "client      client    client"
    "button      button    button";

  grid-template-columns: repeat(2, 2fr) 1fr;
  gap: 1rem;

  select {
    &[name="client"] {
      grid-area: client;
    }

    &[name="item"] {
      grid-area: item;
    }
  }

  label {
    color: var(--white);

    &[for="client"] {
      grid-area: clientLabel;
    }

    &[for="item"] {
      grid-area: itemLabel;
    }
  }

  input {
    &[type="number"] {
      -webkit-appearance: none;
    }

    &#qtd {
      grid-area: quantity;
    }

    &#itemQTD {
      grid-area: itemqtd;
    }
  }

  button {
    grid-area: button;
    background: var(--accent);
  }
`

export const History = styled.section`
  display: grid;
  vertical-align: middle;
  grid-template-areas:
    "title title title"
    "rest  rest  rest";
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  width: 100%;

  --colums: repeat(5, 1fr) 1rem;
  div {
    display: grid;
    align-items: center;
    grid-template-columns: var(--colums);

    padding: 0.5rem;
    text-align: left;
    background: var(--input);

    .notFound {
      width: 100%;
      opacity: 1;
      text-align: center;
      grid-column: 1 / 10;
    }
  }

  div:not(.content) {
    grid-area: title;
    border-radius: 0.4rem;
  }

  .content {
    background: transparent;
    padding: 0;
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    align-items: center;
    border-radius: 0;
    grid-area: rest;

    &:last-of-type {
      border-bottom-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
    }
  }

  article {
    width: 100%;
    display: grid;
    padding: 0.5rem;
    opacity: 0.5;
    border-radius: 0.25rem;
    background: var(--input);
    grid-template-columns: var(--colums);
    transition: all var(--short-ms);
    cursor: pointer;
    border: 1px solid var(--input);

    &:first-child {
      margin-top: 0.5rem;
    }

    &:hover,
    &:focus {
      border-color: var(--accent);
      opacity: 1;
    }
  }

  span {
    padding: 0.5rem 4px;

    .logo {
      padding: 0.5rem 0;
    }
  }

  color: var(--white);
  border-spacing: 0;

  /*
  th {
    background: var(--input);
    font-weight: normal;
    padding: 1rem;
    text-align: left;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    padding: 1rem 0.8rem 1rem 0;
  }

  tbody tr {
    opacity: 0.5;
    margin: 0.5rem 0;
  }

  tbody tr:hover {
    opacity: 1;
    cursor: pointer;
  }

  td {
    background: var(--input);
    padding: 1rem 2rem;
  }

  td img {
    width: 1.2rem;
    height: 1.2rem;
  } */
`

export const HistoryTitles = styled.thead``
