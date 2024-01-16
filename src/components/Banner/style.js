import { styled } from 'styled-components'

export const Container = styled.div`
    margin: 18rem 0rem 4rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    position: relative;
    height: 16.25rem;
    width: 100%;
    gap: 12rem;

    @media (max-width: 890px) {
            gap: 7rem;
        }

    @media (max-width: 542px) {
        gap: 0rem;
    }

    h1{
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        z-index: 2;

       
        @media (max-width: 890px) {
           font-size: 2rem;
        }
        
        @media (max-width: 676px) {
           
        }
    }

    p{
        font-family:${({ theme }) => theme.FONTS.ROBOTO};
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        z-index: 2;

        @media (max-width: 890px) {
           font-size: 1rem;
        }
        
        @media (max-width: 676px) {
           
        }
        
    }

    > div {
        height: auto;
        display: flex;
        flex-direction: column;


    }

    > img {
        margin-bottom: 9.5rem;
        width: 40rem;
        margin-left: -2rem;
        

        @media (max-width: 890px) {
            width: 30rem;
            margin-bottom: 3rem;
        }
        
        @media (max-width: 676px) {
           
        }
    }

    animation: BanneAnimation 1000ms ease-in-out;

    @keyframes BanneAnimation {
    0% {
        transform: translateX(-50%);
        opacity: 0%;
    }
    100% {
        transform: translateX(0);
        opacity: 100%;
    }
 
}
`