import { styled } from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    

    section{
        display: flex;
        flex-direction: column;
        width: 42.9375;
        overflow-wrap: break-word;
        
        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            align-items: center;
        }
    }

    h1{
        
        margin-bottom: 1.4rem;
        font-weight: 500;
        font-size: 3rem;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (max-width: 440px) {
            font-size: 2rem;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        }

    }
    p{
        
        overflow-wrap: break-word;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        margin-bottom: 1.4rem;

        @media (max-width: 440px) {
            font-size: 1.5rem;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            display: flex;
            flex-direction: column;
            text-align: center;      
        }
    }

    img{
        width: 24.37rem;
    }

    .ingredients{
        height: auto;
        margin-bottom: 3rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){

        @media (max-width: 640px){

              
                justify-content: center;
            }       
     }
    }
    @media (max-width: 640px){
                
                flex-direction: column;
                justify-content: center;
            }       

     .button{
        width: 8rem;
        
     }

    animation: DescriptionAnimation 800ms ease-in-out;

    @keyframes DescriptionAnimation {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }

    }
`