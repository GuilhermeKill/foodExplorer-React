import { Form, Container } from './style'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth.jsx"

export function SingIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { singIn } = useAuth()

    function handleSingIn() {
        singIn({ email, password })
    }

    return (
        <Container>
            <Logo />
            <Form>
                <h1> Faça login </h1>

                <Input
                    label={"Email"}
                    type="text"
                    placeholder={"Exemplo: exemplo@exemplo.com"}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    label={"Senha"}
                    type="password"
                    placeholder={"******************"}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title={"Entrar"} onClick={handleSingIn} />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
        </Container>
    )

}