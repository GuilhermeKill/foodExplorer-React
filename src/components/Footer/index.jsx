import { Container } from "./style";
import footerSvg from '../../assets/footerSvg.svg'

export function Footer() {
    return (
        <Container>
            <div>
                <img src={footerSvg} alt="" />
                <span>food explorer</span>
            </div>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )

}