import { styled } from 'styled-components'


export const Container = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
`

export const DesktopHeader = styled.header`
    width: 100%;
    padding: 1.5rem 7.68rem ;               
    gap: 2rem;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.DARK_600};

   
    > div:nth-child(1){
        font-size: 0.6rem;
        width: 13rem;
    }

    > div:nth-child(2){
        width: 60rem;
    }

    > input:nth-child(){
        padding: 12rem;
    }

    > button:nth-child(3){
        width: 13.5rem;
    }

    >img{
        width: 1.3rem;
    }

    @media (max-width: 640px) {
        display: none;
    }
`
export const MobileHeader = styled.header`
    display: none;

    @media (max-width: 640px) {
        display: none;
    
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;

        
        justify-content: center;
        align-items: center;
        

        background: ${({ theme }) => theme.COLORS.DARK_700};

        padding: 4rem 2rem 2rem 2rem;

    >button:nth-child(3){
        position: relative;

        span{
            position: absolute;
            color: white;
            background: ${({ theme }) => theme.COLORS.TOMATO_1OO};
            border-radius: 50%;
            
            top: -0.5rem;
            left: 2rem;
            width: 17px;
        }
    }

    >button{
        background: none;
        border: none;
    }
    
    >div:nth-child(2){
            font-size: 1rem;
            display: flex;
            justify-content: center;
        }

    }
`