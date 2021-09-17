import styled from "styled-components"

export const NewItem = styled.form`
  width: 80%;
  height: 100%;

  span {
    font-size: clamp(0.5rem, 2vmax, 0.8rem);
    margin-bottom: 0.5rem;
    color: red;
    font-weight: bold;
    text-align: left;
  }

  display: grid;
  grid-template-areas:
    "name   name     description"
    "price  price    description"
    "qtd    discount description"
    "button button   button";

  gap: 1rem;

  input {
    &#name {
      grid-area: name;
    }

    &#price {
      grid-area: price;
    }

    &#quantity {
      grid-area: qtd;
    }

    &#discount {
      grid-area: discount;
    }

    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  textarea {
    grid-area: description;
    resize: none;
    overflow: auto;
  }

  button {
    grid-area: button;
  }
`
