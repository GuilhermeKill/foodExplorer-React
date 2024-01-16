import { Container } from "./style";
import Camarao from '../../assets/Mask group-2.png'
import { Button } from '../Button/'
import { FiPlus, FiMinus, FiHeart, FiEdit } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export function Card({ isAdmin = false, data, onClick, src, ...rest }) {
    const [active, setActive] = useState(false)
    const [quant, setQuant] = useState(0)

    function handleActive() {
        setActive(!active)
    }


    function handleToAddQuant() {
        setQuant(prevState => (prevState + 1))
    }

    function handleToRemoveQuant() {
        quant <= 0 ? null : setQuant(prevState => (prevState - 1))

    }

    return (
        <Container >
            {isAdmin ?
                <FiEdit onClick={onClick}
                    className="Edit"
                    size={40}
                    fill={active ? 'white' : 'none'}
                />
                :
                <FiHeart
                    className="hearth"
                    size={40}
                    onClick={(e) => {
                        e.preventDefault();
                        handleActive();
                    }}
                    fill={active ? 'white' : 'none'}

                />
            }
            <img src={src} alt="" onClick={onClick} />

            <h2 onClick={onClick}>{data.title}</h2>
            <p onClick={onClick}>{data.description}</p>

            <span>{"R$ " + data.price}</span>

            {!isAdmin &&
                <div className="bot">
                    
                    <button className="buttons" onClick={ handleToAddQuant}> 
                        <FiPlus size={20}/> 
                    </button>

                    <span>{String(quant).padStart(2, 0)}</span>

                    <button className="buttons" onClick={handleToRemoveQuant}>
                        <FiMinus size={20} />
                    </button>

                    <Button title={"incluír"} />
                </div>
            }
        </Container>
    )
}