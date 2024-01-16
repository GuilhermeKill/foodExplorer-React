import React from 'react';
import { Container } from './style';

export function InputSelect({ label, placeholder, type, icon: Icon, options, ...rest }) {
    return (
        <Container>
            {label && <label htmlFor={type}>{label}</label>}
            <select {...rest}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}