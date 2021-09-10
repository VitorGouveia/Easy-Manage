// import { FC } from "react"
// import { useForm } from "react-hook-form"

// import { TextInput, Button } from "@heathmont/moon-components"
// import { ArrowsLeft } from "@heathmont/moon-icons"
// import { useAuth } from "@hooks"
// import { Link } from "@components"

// import { RegisterContainer } from "./styles"

// const Register: FC = () => {
//   const { signIn } = useAuth()
//   const { register, handleSubmit } = useForm()

//   type SignInRequest = {
//     name: string
//     email: string
//     password: string
//   }

//   const handleSignIn = async ({ name, email, password }: SignInRequest) => {
//     try {
//       await signIn({
//         name,
//         email,
//         password
//       })
//     } catch (error) {
//       return (
//         <>
//           <h1>somethign went wrong</h1>
//         </>
//       )
//     }
//   }

//   return (
//     <RegisterContainer>
//       <header>
//         <img src="/logo.png" alt="FastGas logo" />
//         <h1>Faça seu registro</h1>
//       </header>
//       <main>
//         <form onSubmit={handleSubmit(handleSignIn)}>
//           <div className="input-wrapper">
//             <TextInput
//               required
//               type="text"
//               label="name"
//               placeholder="nome"
//               {...register("name")}
//             />
//             <TextInput
//               required
//               type="text"
//               label="email"
//               placeholder="e-mail"
//               {...register("email")}
//             />
//             <TextInput
//               required
//               type="password"
//               label="password"
//               placeholder="senha"
//               {...register("password")}
//             />
//           </div>

//           <Button fullWidth variant="primary">
//             Criar conta
//           </Button>
//         </form>
//       </main>
//       <footer>
//         <Link name="go to login" url="/login">
//           <ArrowsLeft color="white" fontSize="1rem" />
//           <small>Já tenho conta?</small>
//         </Link>
//       </footer>
//     </RegisterContainer>
//   )
// }

// export default Register
export default function b() {
  return <h1>a</h1>
}
