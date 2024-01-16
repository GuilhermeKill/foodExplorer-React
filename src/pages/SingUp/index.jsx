import { Form, Container } from './style'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { api } from '../../services/api'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SingUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSingUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos")
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('usuário cadastrado com sucesso')
                navigate('/')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar")
                }
            })
    }

    return (
        <Container>
            <Logo />
            <Form>
                <h1> Crie sua conta </h1>

                <Input
                    label={"Nome"}
                    placeholder={"Exemplo: Sandra"}
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
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

                <Button title={"Entrar"} onClick={handleSingUp} />

                <Link to="/">
                    Já possuo uma conta
                </Link>
            </Form>
        </Container>
    )

}