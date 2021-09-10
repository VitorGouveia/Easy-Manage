import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  padding-top: var(--header-height);
`

export const Header = styled.header`
  display: grid;
  grid-template-areas: "logo navbar navbar";

  grid-template-columns: 100px auto;
  grid-template-rows: 90px;
`

export const Logo = styled.a`
  grid-area: logo;
`

export const Navbar = styled.nav`
  grid-area: navbar;
`

export const NavList = styled.ul`
  list-style: none;

  display: flex;
`

export const ListItem = styled.li``
