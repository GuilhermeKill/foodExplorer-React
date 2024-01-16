import { styled } from 'styled-components'
import Serach from '../../assets/search.svg'

export const Container = styled.div`
    border: none;
    width: 100%;
    height: 3rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;

   >select{
        width: 100%;
        
        
        padding: 0.8rem 1rem;
        border-radius: 0.31rem;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        background: ${({ theme }) => theme.COLORS.DARK_900};

       
   }

   > label{


        font-weight: 300;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        color: ${({ theme }) => theme.COLORS.LIGH_400};
   }
`
