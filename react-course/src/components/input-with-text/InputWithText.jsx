import { useState } from 'react';
import './InputWithText.css'


export const InputWithText = () => {    
    const [valor, setValor] = useState('')

    function onChangeHandler (event)  {        
        setValor(event.target.value);
        console.log(valor);
    }

    return (

        <div className='container'>
            <input type="text"  id="" placeholder='Digite aqui...' onChange={onChangeHandler}/>
            <h1>{valor}</h1>
        </div>
    )
}