import Typewriter from "typewriter-effect"

import { Button, Link } from "@components"
import {
  HomeContainer,
  TitleBox,
  FeaturesBox,
  Feature,
  Hero,
  Spec,
  FormBox,
  Form,
  Footer,
  FooterList,
  FooterTitle
} from "./styles"

const Home = () => {
  return (
    <HomeContainer>
      <TitleBox>
        <h1>
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={typewriter => {
              typewriter
                .typeString("Um sistema de estoque ")
                .pauseFor(300)
                .typeString("<strong>simples</strong>")
                .pauseFor(500)
                .deleteChars(7)
                .pauseFor(700)
                .typeString("<strong>poderoso</strong>")
                .pauseFor(700)
                .deleteChars(8)
                .pauseFor(700)
                .typeString("<strong>reiventado</strong>")
                .pauseFor(1000)
                .start()
            }}
          />
        </h1>
        <p>Uma plaforma para controle de inventário e estoque para empresas.</p>

        <Button name="register" url="/register">
          Crie sua conta
        </Button>
      </TitleBox>

      <FeaturesBox>
        <Feature>
          <Spec>
            <summary>Tenha um controle total das suas vendas</summary>
            <p>
              Aqui você consegue customizar todo o aspecto do seu estoque,
              preços, histórico, discontos
            </p>
          </Spec>

          <Hero>
            <img
              src="https://loyverse.com/sites/all/themes/loyversecom/images/product/adv-inventory/notebook.png"
              alt=""
            />
          </Hero>
        </Feature>

        <Feature hasLeftImg>
          <Hero>
            <img
              src="https://www.trisearch.com.au/wp-content/uploads/2020/07/Depositphotos_151249562_m-2015.jpg"
              alt=""
            />
          </Hero>
          <Spec>
            <summary>
              Registre clientes recorrentes da sua base de dados
            </summary>
            <p>
              Guarde informações importantes sobre o seu cliente para usar
              depois <br />
              É possível criar observações sobre um cliente <br />
              Faça vendas para clientes registrados na sua conta
            </p>
          </Spec>
        </Feature>
      </FeaturesBox>

      <FormBox>
        <div>
          <h2>Faça a escolha certa</h2>
          <p>Venha descobrir a nossa plataforma</p>
        </div>

        <Form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <Button name="register" url="/register">
            Criar conta
          </Button>
        </Form>
      </FormBox>
      <Footer>
        <section data-id="1">
          <a href="/">
            <img src="/logo.png" />
          </a>
        </section>

        <section data-id="2">
          <FooterTitle>Produtos</FooterTitle>
          <FooterList>
            <li>
              <Link name="client" url="/client">
                Clientes
              </Link>
            </li>
            <li>
              <Link name="item" url="/item">
                Itens
              </Link>
            </li>
          </FooterList>
        </section>

        <section data-id="3">
          <FooterTitle>Use Cases</FooterTitle>
          <FooterList>
            <li>
              <Link name="client" url="/client">
                Criação de Clientes
              </Link>
            </li>
            <li>
              <Link name="item" url="/item">
                Criação de Itens
              </Link>
            </li>
          </FooterList>
        </section>
      </Footer>
    </HomeContainer>
  )
}

export default Home
