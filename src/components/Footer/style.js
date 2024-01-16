import { styled } from 'styled-components'

export const Container = styled.footer`
    min-height: 3.81rem;
    width: 100%;
    margin-top: auto;

    padding: 0 7.68rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_200}; 

   >div{
        display: flex;
        justify-content: center;
        gap: 1rem;

        width: 11rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
   }
`