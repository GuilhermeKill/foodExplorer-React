import { Container, Form, Add } from "./style";

import { IngredientItem } from '../../components/IngredientItem'
import { ButtonBack } from "../../components/ButtonBack";
import { InputSelect } from '../../components/InputSelect'
import { TextArea } from '../../components/TextArea'
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer'
import { Input } from "../../components/Input";
import { FiUpload } from 'react-icons/fi';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from '../../components/SideMenu'
import { api } from '../../services/api'


export function NewDish() {
    const navigate = useNavigate()
    const [isNew, setIsNew] = useState(true)
    const [isFalse, setIsFalse] = useState(false)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const [ingredents, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")
    const [dishFile, setdishFile] = useState(null)

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleMenu() {
        setMenuIsOpen(!menuIsOpen)
    }

    function handleIngredients() {
        setIngredients(prevState => [...prevState, newIngredients])


        setNewIngredients("")
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter((link, index) => index !== deleted))
    }

    async function handleNewDish() {

        // Validações
        if (!name) {
            return alert("Dígite o título do prato")
        }

        if (!price) {
            return alert("Adicione um preço ao prato")
        }

        if (!category) {
            return alert("Adicione uma categoria ao prato")
        }

        if (!description) {
            return alert("Adicione uma descrição para o prato que deseja adicionar ao cardápio")
        }


        if (newIngredients) {
            return alert("Você deixou um ingrediente no campo para adicionar")
        }

        const formData = new FormData();
        formData.append("image", dishFile);
        formData.append("title", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredents.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        api.post("/adminDishes", formData).then(() => {
            alert("prato cadastrado com sucesso")
        }).catch(() => {
            alert("algo deu errado")
        })

        navigate("/")
    }


    return (
        <Container>
            <SideMenu handleMenu={handleMenu} menuisopen={menuIsOpen.toString()} />
            <Header handleMenu={handleMenu} />
            <ButtonBack />
            <Form>
                <h1>Adicionar prato</h1>

                <div className="top">
                    <Add>
                        <span>Imagem do prato</span>
                        <label htmlFor="dish">
                            <FiUpload />
                            <p>Selecione imagem do prato</p>
                            <input
                                type="file"
                                id="dish"
                                onChange={e => setdishFile(e.target.files[0])}
                            />
                        </label>
                    </Add>

                    <Input
                        type='text'
                        label={"Nome"}
                        placeholder="Ex: Salada Ceasar"
                        onChange={e => setName(e.target.value)}
                    />

                    <InputSelect
                        label="Categoria"
                        options={[
                            { value: '', label: '' },
                            { value: 'Refeição', label: 'Refeição' },
                            { value: 'Bebida', label: 'Bebida' },
                            { value: 'Sobremesa', label: 'Sobremesa' },
                        ]}
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>

                <div className="mid">
                    <Section span={"Ingredientes"}>
                        {
                            ingredents.map((ingredient, index) => (
                                <IngredientItem
                                    key={String(index)}
                                    placeholder="Ingrediente"
                                    value={ingredient}
                                    onClick={() => { handleRemoveIngredient(index) }}
                                />
                            ))

                        }

                        <IngredientItem
                            isNew
                            placeholder="Ingrediente"
                            value={newIngredients}
                            onChange={e => setNewIngredients(e.target.value)}
                            onClick={handleIngredients}
                        />

                    </Section>

                    <Input
                        type='text'
                        label={"Preço"}
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <TextArea
                    label={"Descrição"}
                    placeholder={'Fale brevemente sobre o prato, seus ingredientes e comppsição'}
                    onChange={e => setDescription(e.target.value)}
                />

                <div className="buttons">
                    <Button
                        title={"Adicionar prato"}
                        onClick={handleNewDish}
                    />
                </div>
            </Form>
            <Footer />
        </Container>
    )

}