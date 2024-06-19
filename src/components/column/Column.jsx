import { useState } from "react";
import getData from "../../utilities/http.js";
import { useQuery } from "@tanstack/react-query";
import classes from "./Column.module.css";
import DataWrapper from "../DataWrapper";
import SimpleBarChart from "./SimpleBarChart";

export default function Column() {
    const [emissionType, setEmissionType] = useState("pef_total");
    const { isFetching, error, data } = useQuery({
        queryKey: ["column", emissionType],
        queryFn: () => getData(`column/${emissionType}`),
    });
    return (
        <>
            <div className={classes.title}>
                Plan vs. Actual column graph of company level carbon emissions
                on a monthly basis.
            </div>
            <DataWrapper isFetching={isFetching} error={error} data={data}>
                <div>
                    <label htmlFor="emission-type" className={classes.label}>
                        Emission Type:
                    </label>
                    <select
                        id="emission-type"
                        value={emissionType}
                        className={classes.select}
                        onChange={(event) =>
                            setEmissionType(event.target.value)
                        }
                    >
                        <option value="pef_total">PEF Total</option>
                        <option value="scope_1">Scope 1</option>
                        <option value="scope_2">Scope 2</option>
                        <option value="scope_3">Scope 3</option>
                        <option value="category_1">Category 1</option>
                        <option value="category_5">Category 5</option>
                        <option value="category_12">Category 12</option>
                    </select>
                </div>
                <SimpleBarChart data={data} />
            </DataWrapper>
        </>
    );
}
