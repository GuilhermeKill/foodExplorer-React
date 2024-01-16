import { styled } from 'styled-components'


export const Container = styled.button`
    width: 100%;
    height: auto;
    padding: 0.8rem;
    border: none;
    border-radius: 0.31rem;
    font-size: 0.9rem;

    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TOMATO_1OO};

    @media (max-width: 641px) {
        font-size: 1.3rem;
    }
` 