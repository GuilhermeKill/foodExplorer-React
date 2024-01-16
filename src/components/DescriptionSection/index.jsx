import { Container } from "./style";
import { Ingredient } from '../Ingredient'
import { IncludeButton } from '../IncludeButton'
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'

export function DescriptionSection({ isAdmin = false, data, src, ...rest }) {

    const navigate = useNavigate()
    const params = useParams()

    function handleEditDish() {
        navigate(`/editdish/${params.id}`)
    }

    return (
        <Container {...rest}>
            <img src={src} alt="" />

            <section>
                <h1>{data.title}</h1>

                <p>{data.description}</p>

                {
                    data.ingredients &&
                    <div className="ingredients">
                        {
                            data.ingredients.map(ingredient => <Ingredient key={ingredient.name} title={ingredient.name} />)
                        }
                    </div>
                }
                {
                    isAdmin ?
                        <Button className="button" title={"Editar prato"} onClick={handleEditDish} />
                        :
                        <IncludeButton title={"incluir - R$ " + data.price} />
                }
            </section>

        </Container>
    )
}