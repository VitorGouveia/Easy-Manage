import { useRouter } from "next/router"

import { Tabs, TabLink, Avatar, Button } from "@heathmont/moon-components"
import { GenericUser, GenericUsers } from "@heathmont/moon-icons"
import { Link } from "@components"
import { useAuth } from "@hooks"

import { HeaderContainer, Prop, Title } from "./styles"

export const Header = () => {
  const { isAuthenticated, user, clean } = useAuth()
  const { pathname } = useRouter()
  console.log(pathname)

  return (
    <HeaderContainer>
      <Prop isLogo={true}>
        <img src="/logo.png" alt="FastGas logo" />
        <Title>FastGás Inventory</Title>
      </Prop>

      <Prop isTabs={true}>
        <Tabs
          items={[
            <Link onClick={() => clean()} name="login" url="/clients">
              <TabLink
                href="#1"
                className={pathname === "/clients" ? "active" : ""}
              >
                Clientes
              </TabLink>
            </Link>,

            <Link onClick={() => clean()} name="login" url="/items">
              <TabLink
                href="#2"
                className={pathname === "/items" ? "active" : ""}
              >
                Items
              </TabLink>
              ,
            </Link>,

            <Link onClick={() => clean()} name="login" url="/dash">
              <TabLink
                href="#3"
                className={pathname === "/dash" ? "active" : ""}
              >
                Dashboard
              </TabLink>
            </Link>
          ]}
        />
      </Prop>

      <Prop isUser={true}>
        {/* if is looged */}
        {isAuthenticated === true ? (
          <>
            <Avatar
              name={user.name}
              imageUrl={`https://avatars.dicebear.com/api/jdenticon/${new Date().getTime()}.svg`}
              size="medium"
            />
            <span>{user.name}</span>

            <Link onClick={() => clean()} name="login" url="/login">
              <Button iconLeft={<GenericUser />} variant="primary">
                Log out
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link name="login" url="/login">
              <Button iconLeft={<GenericUser />} variant="primary">
                Log In
              </Button>
            </Link>

            <Link name="register" url="/register">
              <Button iconLeft={<GenericUsers />} variant="tertiary">
                Register
              </Button>
            </Link>
          </>
        )}
        {/* else */}
      </Prop>
    </HeaderContainer>
  )
}
