import Child from "./Child";
import useToggler from "../../hooks/useToggler";
import Row from "./Row";

const generateChildren = (subassemblies, components, itemId) => {
    const childIds = Object.keys(components)
        .concat(Object.keys(subassemblies))
        .filter((id) =>
            subassemblies[id]
                ? subassemblies[id].parentId === itemId
                : components[id].parentId === itemId
        );
    return (
        <>
            {childIds.map((id) => (
                <Child
                    key={id}
                    generateChildren={generateChildren}
                    subassemblies={subassemblies}
                    components={components}
                    itemId={id}
                />
            ))}
        </>
    );
};

export default function Product({ product, productId }) {
    const { subassemblies, components } = product;
    const hasChildren =
        Object.keys(subassemblies).length > 0 ||
        Object.keys(components).length > 0;
    const { showChildren, handleClickToggler } = useToggler();
    const children = generateChildren(subassemblies, components, productId);
    return (
        <Row
            item={product}
            itemId={productId}
            hasChildren={hasChildren}
            showChildren={showChildren}
            handleClickToggler={handleClickToggler}
            children={children}
        />
    );
}
