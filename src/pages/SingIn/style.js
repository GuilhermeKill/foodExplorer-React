import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 17rem 5rem 17rem 5rem ;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10.12rem; 
    overflow-y: hidden;

    @media (max-width: 731px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Form = styled.form`
    border-radius: 0.31rem;    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

  

    padding: 0 1rem;
    width: 70rem;
    height: auto;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1{
        margin: 4rem 0 2rem 0;
        
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-weight: 400;

        @media (max-width: 731px) {
            display: none;
    }
    }

    > button{
        margin-top: 2rem;
    }

    a{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-weight: 400;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: 731px) {
        background:none;

        gap: 4.5rem;
        width: 100%;

        >div:nth-child(){
        justify-content: center;
        }
    }
    animation: FormAnimation 800ms ease-in-out;
    @keyframes FormAnimation {
        0% {
            
            opacity: 0%;
        }
        100% {
    
            opacity: 100%;
        }
    }
`