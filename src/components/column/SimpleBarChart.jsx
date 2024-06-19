import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function SimpleBarChart({ data }) {
    const dataValues = Object.values(data);
    const planData = dataValues.map(({ Plan }) => Plan);
    const actualData = dataValues.map(({ Actual }) => Actual);
    const monthLabels = Object.keys(data);
    return (
        <BarChart
            width={1000}
            height={600}
            series={[
                { data: planData, label: "Plan", color: "rgb(222, 83, 63)" },
                {
                    data: actualData,
                    label: "Actual",
                    color: "rgb(94, 150, 197)",
                },
            ]}
            xAxis={[
                {
                    data: monthLabels,
                    scaleType: "band",
                    categoryGapRatio: 0.3,
                    barGapRatio: 0.1,
                    label: "Month",
                    labelStyle: {
                        transform: "translateY(25px)",
                    },
                },
            ]}
            yAxis={[
                {
                    label: "Emission",
                },
            ]}
            sx={{
                [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translateX(-50px)",
                },
            }}
            margin={{
                left: 90,
                bottom: 90,
            }}
            grid={{ horizontal: true }}
        />
    );
}
