import { styled } from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 33.87rem;
    width: 19rem;

    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.5rem;
  
    .hearth, .Edit{
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
       
        background: none;
        border: none;
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }


    img{
        width: 12rem;
        margin: 1.5rem 1rem ;
    }

    h2{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-weight: 400;
        margin-bottom: 1rem;
        height: 4rem;
        width: 18rem;
        padding: 0rem 1rem;

       text-align: center;
        justify-content: center;

        padding: 0rem 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-weight: 400;
        font-size: 2rem;
    }
    
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 3rem;
        text-align: center;
        padding: 0rem 2rem;
        overflow-wrap: break-word;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-weight: 400;
        margin-bottom: 1rem;
        width: 19rem;
    }
    
    >.bot{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        padding: 0 3rem  0 3rem ;

        gap: 1rem;

        .buttons{
            background: none;
            border: none;

            svg{    
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
        
    }

    animation: slidein 1000ms ease-in-out;

    @keyframes slidein {
    0% {
        transform: translateX(50%);
        opacity: 0%;
    }
    100% {
        transform: translateX(0);
        opacity: 100%;
    }
 
}
`