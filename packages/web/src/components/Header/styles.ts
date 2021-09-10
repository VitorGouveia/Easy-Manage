import styled, { css } from "styled-components"

export const paragraph = css`
  max-height: 24px;
  width: auto;

  display: flex;
  align-items: center;

  font-weight: 700;

  transition: all var(--short-ms);
`

export const HeaderContainer = styled.header`
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

  &:nth-child(even) {
    margin: 0 1rem;
  }

  a:hover,
  a:focus {
    p {
      position: relative;
      ${paragraph}
      color: #fff;

      &::after {
        position: absolute;
        content: "";

        /* left: 50%;
        bottom: -10px; */
        top: 130%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 30px;
        height: 3px;
        background: orangered;
        border-radius: 2px;
      }
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
