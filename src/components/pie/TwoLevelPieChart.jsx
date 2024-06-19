import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { PieChart } from "@mui/x-charts";

export default function TwoLevelPieChart({ data }) {
    const { scope1, scope2, category1, category5, category12 } = data;
    const scope3 = category1 + category5 + category12;
    const data1 = [
        { label: "Scope 1", value: scope1, color: "rgb(222, 83, 63)" },
        { label: "Scope 2", value: scope2, color: "rgb(122, 122, 122)" },
        { label: "Scope 3", value: scope3, color: "rgb(94, 150, 197)" },
    ];
    const data2 = [
        { label: "Category 1", value: category1, color: "rgb(159, 195, 221)" },
        { label: "Category 5", value: category5, color: "rgb(197, 216, 235)" },
        {
            label: "Category 12",
            value: category12,
            color: "rgb(223, 233, 244)",
        },
    ];
    const pefTotal = scope1 + scope2 + scope3;
    const getArcLabel = (params, total) => {
        return `${((params.value / total) * 100).toFixed(2)}%`;
    };
    const startAngle = pefTotal ? 360 - (scope3 / pefTotal) * 360 : 0;
    const StyledText = styled("text")(() => ({
        textAnchor: "middle",
        fontSize: 17.5,
    }));
    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }
    return (
        <PieChart
            series={[
                {
                    innerRadius: 100,
                    outerRadius: 200,
                    data: data1,
                    arcLabel: (params) => getArcLabel(params, pefTotal),
                    paddingAngle: 0.25,
                },
                {
                    innerRadius: 200,
                    outerRadius: 270,
                    data: data2,
                    arcLabel: (params) => getArcLabel(params, scope3),
                    paddingAngle: 0.25,
                    startAngle,
                },
            ]}
            width={800}
            height={600}
        >
            <PieCenterLabel>PEF Total: {pefTotal}</PieCenterLabel>
        </PieChart>
    );
}
