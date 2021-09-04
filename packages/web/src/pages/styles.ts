import styled from "styled-components"

export const Container = styled.div`
  background: ${props => props.theme.color.popo[100]};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  & > section {
    padding-top: var(--header-height);
  }
`
