import { Container } from './style'

export function Search({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}