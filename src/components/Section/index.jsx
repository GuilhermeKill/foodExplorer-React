import { Container } from "./style"

export function Section({ span, children }) {
    return (
        <Container>
            <span>{span}</span>
            <div className="itens">
                {children}
            </div>
        </Container>
    )
}