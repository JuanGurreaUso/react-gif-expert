import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categorias, setCategories ] = useState([]);

    const onAddCategory = ( newCategory ) => {
        if (validaDuplicado( categorias, newCategory )) return;

        setCategories( [ newCategory, ...categorias ]);
    }

    const validaDuplicado = (categorias, nuevaCategoria) => {
        return categorias.find( categoria => {
            return categoria.toLowerCase() === nuevaCategoria.toLowerCase();
        });
    }

    return (
        <>
            <AddCategory
                // setCategories = { setCategories }
                onNewCategory={ onAddCategory }
            />

            {
                categorias.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                ))
            }
        </>
    )
}