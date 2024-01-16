import { Container } from './style'

export function TextArea({ label, placeholder, type, icon: Icon, ...rest }) {

    return (
        <Container>
            {label && <label htmlFor={type}>{label}</label>}
            <textarea {...rest} type={type} placeholder={placeholder}></textarea>
        </Container>
    )
}