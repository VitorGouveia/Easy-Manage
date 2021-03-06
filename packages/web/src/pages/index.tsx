import Image from "next/image"
import Typewriter from "typewriter-effect"
import { useForm } from "react-hook-form"
import { AxiosError } from "axios"
import { ArrowDown } from "react-feather"
import { motion, useViewportScroll, useTransform } from "framer-motion"

import { useAuth } from "@hooks"
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
} from "@styles/home"

import Logo from "../../public/logo.svg"

type UserRegisterProps = {
  name: string
  email: string
  password: string
}

const Home = () => {
  const { scrollY } = useViewportScroll()
  const Feature1Opacity = useTransform(scrollY, [230, 600], [0, 1])
  const Feature1ImgOpacity = useTransform(scrollY, [320, 620], [0, 1])
  const Feature2Opacity = useTransform(scrollY, [600, 1000], [0, 1])
  const Feature2ImgOpacity = useTransform(scrollY, [730, 1100], [0, 1])

  const { handleSubmit, setError, formState, register } = useForm()
  const { signIn } = useAuth()

  const { errors } = formState

  const handleRegister = async ({
    name,
    email,
    password
  }: UserRegisterProps) => {
    try {
      await signIn({
        name,
        email,
        password
      })
    } catch (error) {
      const axiosError = error as AxiosError

      const APIError = axiosError.response.data.error

      if (APIError === "User with that e-mail already exists.") {
        setError(
          "email",
          {
            message: "Um usuário com esse e-mail já existe! Tenta outro."
          },
          {
            shouldFocus: true
          }
        )
      }
    }
  }

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

        <Link url="/register" name="register">
          <Button>Crie sua conta</Button>
        </Link>

        <Link id="arrow" url="#features" name="features">
          <ArrowDown size={32} />
        </Link>
      </TitleBox>

      <FeaturesBox id="features">
        <Feature>
          <Spec>
            <motion.summary style={{ opacity: Feature1Opacity }}>
              Tenha um controle total das suas vendas
            </motion.summary>
            {/* <summary>Tenha um controle total das suas vendas</summary> */}
            <motion.p style={{ opacity: Feature1Opacity }}>
              Aqui você consegue customizar todo o aspecto do seu estoque,
              preços, histórico, discontos
            </motion.p>
          </Spec>

          <Hero>
            <motion.img
              style={{
                opacity: Feature1ImgOpacity
              }}
              src="https://loyverse.com/sites/all/themes/loyversecom/images/product/adv-inventory/notebook.png"
              alt=""
            />
          </Hero>
        </Feature>

        <Feature hasLeftImg>
          <Hero>
            <motion.img
              style={{ opacity: Feature2ImgOpacity }}
              src="https://www.trisearch.com.au/wp-content/uploads/2020/07/Depositphotos_151249562_m-2015.jpg"
              alt=""
            />
          </Hero>
          <Spec>
            <motion.summary style={{ opacity: Feature2Opacity }}>
              Registre clientes recorrentes da sua base de dados
            </motion.summary>
            <motion.p style={{ opacity: Feature2Opacity }}>
              Guarde informações importantes sobre o seu cliente para usar
              depois
              <br />
              <br />
              É possível criar observações sobre um cliente
              <br />
              <br />
              Faça vendas para clientes registrados na sua conta
            </motion.p>
          </Spec>
        </Feature>
      </FeaturesBox>

      <FormBox>
        <div>
          <h2>Faça a escolha certa</h2>
          <p>Venha descobrir a nossa plataforma</p>
        </div>

        <Form onSubmit={handleSubmit(handleRegister)}>
          <input
            required
            type="text"
            placeholder="Nome"
            {...register("name", {
              required: "Você precisa colocar um nome pro seu usuário"
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            required
            type="email"
            placeholder="E-mail"
            {...register("email", {})}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            required
            type="password"
            placeholder="Senha"
            {...register("password", {
              required:
                "Você quer que sua conta fique desprotegida? Coloca uma senha!"
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <Button>Criar conta</Button>
        </Form>
      </FormBox>
      <Footer>
        <section data-id="1">
          <a href="/">
            <Image width={64} height={64} src={Logo} alt="fastgas logo" />
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

        <section data-id="4">
          <FooterTitle>Perguntas</FooterTitle>
          <FooterList>
            <li>
              <Link name="faq" url="/faq">
                FAQ
              </Link>
            </li>
          </FooterList>
        </section>
      </Footer>
    </HomeContainer>
  )
}

export default Home
