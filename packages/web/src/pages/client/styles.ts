import styled from "styled-components"

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

  ul {
    grid-area: clients;
  }

  & > section {
    grid-area: new;

    height: 100%;
  }
`

export const Card = styled.li`
  padding: 1rem;

  color: #dedede;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  background: ${props => props.theme.color.gohan[100]};
`
