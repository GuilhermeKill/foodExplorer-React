import { Container } from './style.js'
import { TfiAngleLeft } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';


export function ButtonBack() {
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }
    return (
        <Container onClick={handleBack}>
            <TfiAngleLeft size={25} />
            <p>Voltar</p>
        </Container>
    )
}