import styled, { css } from "styled-components"

export const paragraph = css`
  max-height: 24px;
  width: auto;

  display: flex;
  align-items: center;

  font-weight: 700;

  transition: all calc(var(--short-ms) * 2);
`

export const HeaderContainer = styled.header`
  z-index: 10;
  position: fixed;

  width: 100%;

  padding: 1.2rem;

  display: grid;
  place-items: center;
  grid-template-areas: "logo tabs user";

  grid-template-columns: 1fr 2fr 1fr;

  background: #171619;
  border-bottom: 2px solid #323232;
  --header-height: 60px;
`

export const Logo = styled.a`
  display: flex;
  padding: 0.4rem;
  border-radius: 0.3rem;
  transition: all 200ms;

  &:hover,
  &:focus {
    background: #525252;
  }

  img {
    width: 24px;
    height: 24px;
  }

  p {
    margin-left: 0.2rem;

    padding: 0.4rem;
    border-radius: 0.3rem;
    font-size: clamp(0.5rem, -0.3rem + 1.6013vw, 1rem);

    ${paragraph}
  }
`

export const Navbar = styled.ul`
  list-style: none;

  display: flex;
`

export const NavbarItem = styled.li`
  font-size: 1rem;
  p {
    padding: 0.2rem;
    background: linear-gradient(180deg, red, orangered) repeat-x 0 100%;
    background-size: 0.125rem 0.125rem;
    transition: all calc(var(--short-ms) * 2);
  }

  &:nth-child(even) {
    margin: 0 1rem;
  }

  a:hover,
  a:focus {
    p {
      color: #fff;
      background-size: 0.125rem 3.125rem;
    }
  }
`

export const User = styled.section`
  display: flex;
  align-items: center;

  color: var(--accent);
`

export const Avatar = styled.div`
  padding: 0.6rem;

  display: flex;
  align-items: center;

  transition: all var(--short-ms);

  &:hover,
  &:focus {
    cursor: pointer;
    background: #525252;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    margin-left: 0.4rem;
    color: var(--white);
  }
`
