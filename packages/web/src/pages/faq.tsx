import { FC } from "react"

import {
  FaqContainer,
  QuestionContainer,
  QuestionTitle,
  QuestionDescription,
  QuestionItem
} from "@styles/pages/faq"

const faq: FC = () => {
  const questions = [
    {
      title: "A Página travou no login e agora?",
      answers: [
        "Isso é normal",
        "Quando você faz login é normal que exista uma demora",
        "Isso acontece porque nossos servidores demoram pra ligar.",
        "Tente fazer login novamente, caso não funcione me mande mensagem."
      ]
    },
    {
      title: "Ao adicionar/remover/editar Cliente/Item algo deu errado",
      answers: [
        "Esse plataforma ainda possui alguns erros",
        "Caso esses error aconteçam reinicie a página e tente novamente.",
        "Se após reinicar a página nada funcionar, me mande mensagem."
      ]
    },
    {
      title: "Ao adicionar/remover/editar Cliente/Item nada aconteceu",
      answers: [
        "Esse plataforma ainda possui alguns erros",
        "Caso esses error aconteçam reinicie a página.",
        "Se após reinicar a página nenhum item mudar, me mande mensagem."
      ]
    }
  ]

  return (
    <FaqContainer>
      <QuestionContainer>
        <QuestionTitle>Problemas com a plataforma</QuestionTitle>
        <QuestionDescription>
          Caso você tenha algum problema com a plataforma, procure a sua
          pergunta aqui.
        </QuestionDescription>

        <article>
          {questions.map(({ title, answers }) => {
            return (
              <QuestionItem>
                <summary>{title}</summary>

                <div>
                  <p>
                    {answers.map(answer => {
                      return (
                        <>
                          {answer}
                          <br />
                        </>
                      )
                    })}
                  </p>
                </div>
              </QuestionItem>
            )
          })}
        </article>
      </QuestionContainer>
    </FaqContainer>
  )
}

export default faq
