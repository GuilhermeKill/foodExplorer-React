import { Container, DesktopHeader, MobileHeader } from "./style";
import PropTypes from 'prop-types';
import Leave from '../../assets/leave.svg'
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import burger from '../../assets/burger.svg'
import list from '../../assets/list.svg';
import { useAuth } from '../../hooks/auth.jsx';

export function Header({ handleMenu, search }) {
    const { singOut, user } = useAuth()

    const navigate = useNavigate()
    const [admin, setAdmin] = useState(false)
    

    function handleNewDish() {
        admin ? navigate("/newDish") : navigate('/')
    }

    function handleSingOut() {
        singOut()
        navigate("/")
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@foodexplorer:user"))
        if (user && user.isAdmin === 1) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, [])

    

    return (
        <Container>
            <DesktopHeader>
                <Logo span={admin ? "admin" : ""} />
                <Input placeholder={"Busque por pratos ou ingredientes"} onChange={e => { search(e.target.value) }}/>
                <Button className="button" title={admin ? "Novo prato" : "Pedidos (0)"} onClick={handleNewDish} />
                <a onClick={handleSingOut}>
                    <img src={Leave} />
                </a>
            </DesktopHeader>

            <MobileHeader>

                <button onClick={() => handleMenu()}>
                    <img src={burger} alt="" />
                </button>

                <Logo span={admin ? "admin" : ""} />

                {!admin &&
                    <>
                        <button >
                            <span>0</span>
                            <img src={list} alt="" />
                        </button>
                    </>
                }


            </MobileHeader>
        </Container>
    )
}