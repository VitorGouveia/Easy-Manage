import styled, { css } from "styled-components"

export const HeaderContainer = styled.header`
  position: fixed;

  width: 100%;
  height: 90px;

  padding: 1rem 3rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  align-items: center;
  place-items: center;

  background: #171619;

  border-bottom: 2px solid #323232;

  img {
    width: 24px;
  }
`

interface PropProps {
  isLogo?: boolean
  isTabs?: boolean
  isUser?: boolean
}

export const Prop = styled.section<PropProps>`
  display: flex;
  padding: 0.2rem;
  align-items: center;
  color: ${props => props.theme.color.bulma[100]};

  /* Remove the skip to content */
  nav {
    & > a {
      display: none;
    }
  }

  a {
    &::after {
      background-color: ${props => props.theme.color.dodoria[100]};
    }
  }

  &:hover {
    cursor: pointer;

    h1 {
      background: #323232;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: normal;
    border-radius: 0.2rem;
    height: auto;

    &:first-of-type {
      background: ${props => props.theme.color.dodoria[100]};

      &:hover {
        background: ${props => props.theme.color.dodoria[10]};
      }
    }

    div {
      width: 100%;
    }
  }

  ${props =>
    props.isTabs &&
    css`
      width: auto;
      align-self: flex-end;
    `}

  ${props =>
    props.isUser &&
    css`
      height: 24px;
      width: 100%;
      margin-left: 1rem;
      padding-left: 1rem;
      justify-content: space-between;
      border-left: 1px solid #323232;

      div {
        width: 24px;
        height: 24px;
        border-radius: 0;
      }
    `}
    ${props =>
    props.isLogo &&
    css`
      width: auto;
      justify-content: space-between;
      height: 24px;
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 1px solid #323232;
    `}
`

export const Title = styled.h1`
  font-size: 12px;
  font-weight: bold;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin-left: 0.2rem;

  transition: background 200ms;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.color.trunks[100]};
  }
`
