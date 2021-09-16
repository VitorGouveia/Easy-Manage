import { FC } from "react"
import { PieChart } from "react-minimal-pie-chart"

import { DashContainer, Card, PieContainer } from "@styles/pages/dash"

const DashPage: FC = () => {
    const pieData = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
      ]

    return (
        <DashContainer>
            <Card>dash</Card>
            <Card>dash</Card>
            <Card>dash</Card>
            <Card>dash</Card>

            <PieContainer>
                <PieChart data={pieData} />
            </PieContainer>
        </DashContainer>
    )
} 

export default DashPage