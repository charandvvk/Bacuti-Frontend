import { useQuery } from "@tanstack/react-query";
import getData from "../../utilities/http.js";
import classes from "./Table.module.css";
import DataWrapper from "../DataWrapper";
import Product from "./Product.jsx";

export default function Table() {
    const { isFetching, error, data } = useQuery({
        queryKey: ["table"],
        queryFn: () => getData("table"),
    });
    return (
        <>
            <div className={classes.title}>
                Carbon emissions (Scope 1, Scope 2, and Scope 3) as a table
                graph starting at the company level with drill downs.
            </div>
            <DataWrapper isFetching={isFetching} error={error} data={data}>
                <>
                    <div className={`${classes.flex} ${classes.codes}`}>
                        <div className={`${classes.flex} ${classes.code}`}>
                            <div
                                className={`${classes.box} ${classes.product}`}
                            ></div>
                            <div>Product</div>
                        </div>
                        <div className={`${classes.flex} ${classes.code}`}>
                            <div
                                className={`${classes.box} ${classes.subassembly}`}
                            ></div>
                            <div>Subassembly</div>
                        </div>
                        <div className={`${classes.flex} ${classes.code}`}>
                            <div
                                className={`${classes.box} ${classes.component}`}
                            ></div>
                            <div>Component</div>
                        </div>
                    </div>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Scope 1</th>
                                <th>Scope 2</th>
                                <th>Scope 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                Object.entries(data).map(([key, value]) => (
                                    <Product
                                        key={key}
                                        product={value}
                                        productId={key}
                                    />
                                ))}
                        </tbody>
                    </table>
                </>
            </DataWrapper>
        </>
    );
}
