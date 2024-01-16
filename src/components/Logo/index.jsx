import { Container } from "./style";
import Logoimage from '../../assets/logo.svg'

export function Logo({ isFooter, span, ...rest }) {

    return (
        <Container>
            <div className="content">
                <div className="box">
                    <img src={Logoimage} alt="" />
                    <h1>food explorer
                        {span && <span>{span}</span>}
                    </h1>
                </div>
            </div>
        </Container>
    )
}