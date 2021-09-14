 import { FC } from "react"

 import { useAuth } from "@hooks"
 import { useForm } from "react-hook-form"
 import { Button } from "@components"

 import { LoginContainer } from "../../styles/pages/login"

 const Login: FC = () => {
   const { logIn } = useAuth()
   const { register, handleSubmit } = useForm()

   type LogInRequest = {
     email: string
     password: string
   }

   const handleLogIn = async ({ email, password }: LogInRequest) => {
     try {
       await logIn({
         email,
         password
       })
     } catch (error) {}
   }

   return (
     <LoginContainer>
       <header>
         <img src="/logo.png" alt="FastGas logo" />
         <h1>Faça login</h1>
       </header>
       <main>
         <form onSubmit={handleSubmit(handleLogIn)}>
           <div className="input-wrapper">
             <input
               required
               type="text"
               placeholder="e-mail"
               {...register("email")}
             />
             <input
               required
               type="password"
               placeholder="senha"
               {...register("password")}
             />
           </div>

           <Button>
             Fazer Login
           </Button>
         </form>
       </main>
       <footer>
         {/* <ArrowsLeft color="white" fontSize="1rem" /> */}
         <small>Não tem conta?</small>
       </footer>
     </LoginContainer>
   )
 }

 export default Login