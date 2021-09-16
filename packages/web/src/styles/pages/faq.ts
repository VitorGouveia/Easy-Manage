import styled from "styled-components"

export const FaqContainer = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const QuestionContainer = styled.article`
    width: 80%;
    height: 100%;

    padding: clamp(1rem, 2vmax, 4rem);

    display: flex;

    ul {
        list-style: none;
    }
`

export const QuestionTitle = styled.h2`
    color: #fff;
    `

export const QuestionItem = styled.li`
    padding: 1rem;
    color: #fff;
`