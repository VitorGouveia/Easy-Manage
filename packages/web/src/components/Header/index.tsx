import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

import { Link, Button } from "@components"
import { useAuth } from "@hooks"

import {
  HeaderContainer,
  Logo,
  Navbar,
  NavbarItem,
  User,
  Avatar
} from "./styles"

export const Header = () => {
  const { isAuthenticated, user, clean } = useAuth()

  return (
    <HeaderContainer>
      <Logo href="/">
        <img src="/logo.png" alt="fastgas logo" />
        <p>fastgás</p>
      </Logo>

      <nav>
        <Navbar>
          <NavbarItem>
            <Link name="clientes" url="/client">
              <p>Clientes</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link name="itens" url="/item">
              <p>Itens</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link name="histórico" url="/history">
              <p>Histórico</p>
            </Link>
          </NavbarItem>
        </Navbar>
      </nav>

      <User>
        {isAuthenticated ? (
          <Avatar
            style={{ width: "auto", borderRadius: "0.3rem", height: "36px" }}
          >
            <img
              src={`https://avatars.dicebear.com/api/bottts/${user.id}.svg`}
              alt="Seu avatar"
            />
            <span>
              <strong>{user.name}</strong>
            </span>
          </Avatar>
        ) : (
          <>
            <Button url="/" name="">
              login
            </Button>
            <Button url="/" name="">
              registre-se
            </Button>
          </>
        )}
      </User>
    </HeaderContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { "fastgas.token": token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
