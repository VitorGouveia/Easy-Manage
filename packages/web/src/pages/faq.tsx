import { FC } from "react"

import {
    FaqContainer,
    QuestionContainer,
    QuestionTitle,
    QuestionItem
} from "@styles/pages/faq"

const faq: FC = () => {
    return (
        <FaqContainer>
            <QuestionContainer>
                <QuestionTitle>Problemas com a plataforma</QuestionTitle>

                <ul>
                    <QuestionItem>a</QuestionItem>
                    <QuestionItem>b</QuestionItem>
                    <QuestionItem>c</QuestionItem>
                    <QuestionItem>d</QuestionItem>
                </ul>
            </QuestionContainer>
        </FaqContainer>
    )
}

export default faq