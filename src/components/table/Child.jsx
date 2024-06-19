import useToggler from "../../hooks/useToggler";
import Row from "./Row";

const hasChildrenWithParentId = (items, parentId) =>
    Object.values(items).some((item) => item.parentId === parentId);

export default function Child({
    generateChildren,
    subassemblies,
    components,
    itemId,
}) {
    const item = subassemblies[itemId] || components[itemId];
    const hasChildren =
        hasChildrenWithParentId(subassemblies, itemId) ||
        hasChildrenWithParentId(components, itemId);
    const { showChildren, handleClickToggler } = useToggler();
    const children = generateChildren(subassemblies, components, itemId);
    return (
        <Row
            item={item}
            itemId={itemId}
            hasChildren={hasChildren}
            showChildren={showChildren}
            handleClickToggler={handleClickToggler}
            children={children}
        />
    );
}
