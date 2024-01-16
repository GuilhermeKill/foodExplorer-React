import { Container } from './style'
import imageBanner from '../../assets/imageBanner.svg'

export function Banner() {

    return (
        <Container>
            <img src={imageBanner} alt="" />
            <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
}