import { styled } from 'styled-components'

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`