import classes from "./Row.module.css";
import { FaChevronRight } from "react-icons/fa6";

export default function Row({
    itemId,
    hasChildren,
    item,
    showChildren,
    handleClickToggler,
    children,
}) {
    const { name, type, scope_1, scope_2, scope_3 } = item;
    return (
        <>
            <tr
                key={itemId}
                onClick={hasChildren ? handleClickToggler : undefined}
                className={`${classes[type]} ${
                    hasChildren ? classes.parent : undefined
                }`}
            >
                <td>
                    <div className={hasChildren ? classes.item : undefined}>
                        {hasChildren && (
                            <FaChevronRight
                                className={
                                    showChildren ? classes.active : undefined
                                }
                            />
                        )}
                        {name}
                    </div>
                </td>
                <td>{scope_1}</td>
                <td>{scope_2}</td>
                <td>{scope_3}</td>
            </tr>
            {showChildren && children}
        </>
    );
}
