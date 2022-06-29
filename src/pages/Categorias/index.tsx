import React from "react";

import { CategoriaContext } from "../../context/CategoriaContext";

const Categorias = () => {
    const { categoria, setCategoria } = React.useContext(CategoriaContext)

    if(!categoria.idCategoria === null) {
        return(
            <>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Categorias;