import { styled } from 'styled-components'

export const Container = styled.a`
    margin: 9rem  0 2rem 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 6.62rem;
    animation: ButtonBackAnimatin 800ms ease-in-out;
    
    >p {
        font-weight: 700;
        font-size: 1.62rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
    }
    @media
     (max-width: 641px) {
        margin: 13rem  0 2rem 8rem;
    }

    
    
    @keyframes ButtonBackAnimatin {
    0% {
        
        opacity: 0%;
    }
    100% {

        opacity: 100%;
    }
    }
`