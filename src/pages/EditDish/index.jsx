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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from '../../components/SideMenu'
import { api } from '../../services/api'
import { useParams } from "react-router-dom";

export function EditDish() {
    const navigate = useNavigate()

    const params = useParams()

    const [data, setData] = useState([])
    const [name, setName] = useState('')
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
        console.log(ingredents)
    }

    async function handleUpdateDish() {
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

        if (!ingredents) {
            return alert("Você não adicionou os ingredientes ao prato")
        }

        if (newIngredients) {
            return alert("Você deixou um ingrediente no campo para adicionar")
        }

        api.put(`/adminDishes/${params.id}`, { title: name, description, price, category, ingredents })

        if (dishFile) {
            const formData = new FormData();
            formData.append("image", dishFile);

            api.patch(`/adminDishes/dishImage/${params.id}`, formData)
        }

        alert("Prato modificado com sucesso")
        navigate(-1)
    }

    function handleDeleteDish() {
        const confirm = window.confirm("Deseja realmente excluír esse prato?")
        if (confirm) {
            api.delete(`/adminDishes/${params.id}`)

            alert("Prato excluído com sucesso")
            navigate("/")
        }
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/dishes/${params.id}`)

            const { title, description, category, price, ingredients, imageFile } = response.data;
            setName(title);
            setDescription(description);
            setCategory(category);
            setPrice(price);
            setIngredients(ingredients.map(ingredient => ingredient.name));
            setdishFile(imageFile)
        }
        fetchNotes()
    }, [])


    return (
        <Container>
            <SideMenu handleMenu={handleMenu} menuisopen={menuIsOpen.toString()} />
            <Header handleMenu={handleMenu} />
            <ButtonBack />
            <Form>
                <h1>Editar prato</h1>

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
                        value={name}
                        label={"Nome"}
                        placeholder="Ex: Salada Ceasar"
                        onChange={e => setName(e.target.value)}
                    />

                    <InputSelect
                        value={category || ''}
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
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredient(index)}
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
                        value={price || ''}
                        type='text'
                        label={"Preço"}
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <TextArea
                    value={description || ''}
                    label={"Descrição"}
                    placeholder={'Fale brevemente sobre o prato, seus ingredientes e comppsição'}
                    onChange={e => setDescription(e.target.value)}
                />

                <div className="buttons">
                    <Button
                        title={"Excluír"}
                        onClick={handleDeleteDish}
                    />
                    <Button
                        title={"Atualizar"}
                        onClick={handleUpdateDish}
                    />
                </div>

            </Form>
            <Footer />
        </Container>
    )

}