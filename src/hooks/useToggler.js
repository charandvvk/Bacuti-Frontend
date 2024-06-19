import { useState } from "react";

const useToggler = () => {
    const [showChildren, setShowChildren] = useState(false);
    function handleClickToggler() {
        setShowChildren((prevState) => !prevState);
    }
    return { showChildren, handleClickToggler };
};

export default useToggler;
