import styled from "styled-components"

export const DashContainer = styled.section`
    width: 100%;
    height: 100%;

    padding: clamp(1rem, 4vmax, 10rem);

    display: grid;
    grid-template-areas: 
        "card card card card"
        "pie  pie  pie  pie"
        "card card card card"
    ;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    gap: 2rem;
`

export const Card = styled.div`
    padding: clamp(1rem, 2vmax, 3rem);
    background: #313133;

    border-radius: clamp(8px, 1vw, 12px);
    `

export const PieContainer = styled.div`
    padding: clamp(1rem, 2vmax, 3rem);
    background: #313133;

    border-radius: clamp(8px, 1vw, 12px);
`