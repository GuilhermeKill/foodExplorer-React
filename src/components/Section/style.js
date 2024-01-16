import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 56px 0 28px;
    
    width: 100%;
    border-radius: 0.31rem;
    border: none;

    .itens{
        padding: .5rem;
        padding-left: 1rem;
        gap: 1rem;
        height: auto;
        flex-wrap: wrap;
        border-radius: 0.31rem;
        display: flex;
        align-items: center;

        flex-direction: row;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        background: ${({ theme }) => theme.COLORS.DARK_900};
    }
    > span {
        font-weight: 300;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        color: ${({ theme }) => theme.COLORS.LIGH_400};
    }
`