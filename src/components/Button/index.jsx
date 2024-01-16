import { Container } from "./style";


export function Button({ title, icon: Icon, ...rest }) {

    return (
        <Container type="button" {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}