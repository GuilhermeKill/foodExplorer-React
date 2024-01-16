import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    .box{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }

    h1{
        position: relative;
    }

    span{
        position: absolute;
        top: 2rem;
        left: 2rem;
        font-family:  ${({ theme }) => theme.FONTS.ROBOTO};
        color:  ${({ theme }) => theme.COLORS.CAKE_200};
        font-weight: 400;
        font-size: 1rem;
        line-height: 29px;
    }

    @media (max-width: 731px) {
        display: flex;
        flex-direction: column;

        .box{
            justify-content: center;
        }
        
    }

    @media (max-width: 640px) {        
        span{
           top: 2rem;
           left: 9rem;
        }
        .content{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    }

`
