import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState([]);

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();

        if ( newInputValue.length <= 1 ) return;
        setInputValue('');
        onNewCategory( newInputValue );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                name='categoria'
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button type='submit'>Agregar</button>
        </form>
    )
}