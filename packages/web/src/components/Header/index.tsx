import { HeaderContainer, Prop, Title } from "./styles"

import { Tabs, TabLink, Avatar, Button } from "@heathmont/moon-components"
import { GenericUser, GenericUsers } from "@heathmont/moon-icons"
import { Link } from "@components"
import { useAuth } from "@hooks"

export const Header = () => {
  const { isAuthenticated, user, clean } = useAuth()

  return (
    <HeaderContainer>
      <Prop isLogo={true}>
        <img src="/logo.png" alt="FastGas logo" />
        <Title>FastGás Inventory</Title>
      </Prop>

      <Prop isTabs={true}>
        <Tabs
          items={[
            <TabLink href="#1">Clientes</TabLink>,
            <TabLink href="#2">Produtos</TabLink>,
            <TabLink href="#3">Dashboard</TabLink>
          ]}
        />
      </Prop>

      <Prop isUser={true}>
        {/* if is looged */}
        {isAuthenticated ? (
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
