import { useState } from "react";
import classes from "./App.module.css";
import Column from "./components/column/Column";
import Table from "./components/table/Table";
import Pie from "./components/pie/Pie";

function App() {
    const [graph, setGraph] = useState("column");
    return (
        <div className={classes.app}>
            <div className={classes.menu}>
                <div className={classes.title}>Graphs:</div>
                <div className={classes.buttons}>
                    <button
                        onClick={() => setGraph("column")}
                        className={
                            graph === "column" ? classes.active : undefined
                        }
                    >
                        a. Column
                    </button>
                    <button
                        onClick={() => setGraph("table")}
                        className={
                            graph === "table" ? classes.active : undefined
                        }
                    >
                        b. Table
                    </button>
                    <button
                        onClick={() => setGraph("pie")}
                        className={graph === "pie" ? classes.active : undefined}
                    >
                        c. Pie
                    </button>
                </div>
            </div>
            <div className={classes.graph}>
                {graph === "column" && <Column />}
                {graph === "table" && <Table />}
                {graph === "pie" && <Pie />}
            </div>
        </div>
    );
}

export default App;
