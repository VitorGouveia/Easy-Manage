import { Container, Header, Prop, Title } from "./styles"

import { Tabs, TabLink, Avatar, Button } from "@heathmont/moon-components"

import { GenericUser, GenericUsers } from "@heathmont/moon-icons"

const Home = () => {
  return (
    <Container>
      <Header>
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
          <Avatar
            imageUrl={`https://avatars.dicebear.com/api/jdenticon/${new Date().getTime()}.svg`}
            size="medium"
          />
          {/* else */}
          <Button iconLeft={<GenericUser />} variant="primary">
            Log In
          </Button>

          <Button iconLeft={<GenericUsers />} variant="tertiary">
            Register
          </Button>
        </Prop>
      </Header>
    </Container>
  )
}

export default Home
