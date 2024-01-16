import { Container } from './style'
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button } from '../Button'
import { useState } from 'react';
export function IncludeButton({ title }) {
    const [quant, setQuant] = useState(0)


    function handleToAddQuant() {
        setQuant(prevState => (prevState + 1))
    }

    function handleToRemoveQuant() {
        quant <= 0 ? null : setQuant(prevState => (prevState - 1))

    }


    return (
        <Container>
            <button onClick={handleToAddQuant} className="buttons"><FiPlus size={20} /></button>
            <span>{String(quant).padStart(2, 0)}</span>
            <button onClick={handleToRemoveQuant} className="buttons"><FiMinus size={20} /></button>

            <Button title={title} />
        </Container>
    )
}