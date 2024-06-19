import { useQuery } from "@tanstack/react-query";
import getData from "../../utilities/http.js";
import classes from "./Pie.module.css";
import DataWrapper from "../DataWrapper.jsx";
import TwoLevelPieChart from "./TwoLevelPieChart.jsx";

export default function Pie() {
    const { isFetching, error, data } = useQuery({
        queryKey: ["pie"],
        queryFn: () => getData("pie"),
    });
    return (
        <>
            <div className={classes.title}>
                Company level carbon emissions as a 2-level pie graph.
            </div>
            <div>i. Level 1 – Scope 1, Scope 2 and Scope 3.</div>
            <div>
                ii. Level 2 – Categories 1 through 15 (1, 5, and 12) for Scope
                3.
            </div>
            <DataWrapper isFetching={isFetching} error={error} data={data}>
                <TwoLevelPieChart data={data} />
            </DataWrapper>
        </>
    );
}
