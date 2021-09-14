import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
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
  const { isAuthenticated, user } = useAuth()
  const { pathname } = useRouter()

  const pages = [
    {
      path: "/client",
      name: "Clientes"
    },
    {
      path: "/item",
      name: "Itens"
    },
    {
      path: "/history",
      name: "Histórico"
    }
  ]

  return (
    <HeaderContainer>
      <Logo href="/">
        <img src="/logo.png" alt="fastgas logo" />
        <p>fastgás</p>
      </Logo>

      <nav>
        <Navbar>
          {pages.map(({ name, path }) => {
            return (
              <NavbarItem key={name} active={pathname === path}>
                <Link name={name} url={path}>
                  <p>{name}</p>
                </Link>
              </NavbarItem>
            )
          })}
          </Navbar>
      </nav>

      <User>
        {isAuthenticated ? (
          <Avatar
            style={{ width: "auto", borderRadius: "0.3rem", height: "36px" }}
          >
            <Image
            width={32}
            height={32}
              src={`https://avatars.dicebear.com/api/bottts/${user.id}.svg`}
              alt="Seu avatar"
            />
            <span>
              <strong>{user.name}</strong>
            </span>
          </Avatar>
        ) : (
          <>
            <Button>login</Button>
            <Button>registre-se</Button>
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
