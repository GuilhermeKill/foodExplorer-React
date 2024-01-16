import styled from "styled-components";

export const Container = styled.div`
width: 100%;

display: flex;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.DARK_900};

border-radius: 5px;

>svg{
    color: ${({ theme }) => theme.COLORS.GREY_200};
    margin-left: 16px;
}

>input{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    border: 0;

    width: 100%;
    height: 48px;
    

    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GREY_400};
    }
}

@media(max-width: 1140px){
    
    >svg{
        margin-left: 10px;
    }
}
` 