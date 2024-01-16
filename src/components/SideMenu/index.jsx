import { Container, Header, Nav } from "./style";
import { FiX } from "react-icons/fi";
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from "../Search";
import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/auth.jsX';
import { useNavigate } from "react-router-dom";

export function SideMenu({ handleMenu, menuisopen, search }) {
    const { singOut, user } = useAuth()
    const [admin, setAdmin] = useState(true)

    const navigate = useNavigate()

    function handleNewDish() {
        navigate("/newDish")
    }

    function handleSingOut() {
        singOut()
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
        <Container data-menu-is-open={menuisopen}>
            <Header>
                <button menuisopen={menuisopen} onClick={handleMenu}>
                    <FiX size={30} />
                    Menu
                </button>
            </Header>

            <Search
                placeholder="Busque pratos ou ingredientes"
                icon={FiSearch}
                onChange={e => {search(e.target.value)}}

            />

            <Nav>
                {
                    admin &&
                    <a onClick={handleNewDish}>Novo prato</a>
                }
                <a onClick={handleSingOut}>Sair</a>
            </Nav>
        </Container>
    )
}