import { styled } from 'styled-components'

export const Container = styled.aside`
    width: 100%;
    height: 100%;
    position: absolute;

    top: 0;
    right: 0;

    padding: 1rem;
    z-index: 3;
    background:${({ theme }) => theme.COLORS.DARK_400};

    > div:nth-child(2){
        margin-top: 14rem;
    }

    transform: translateX(-100%);
    transition: 0.3s ease-in-out;


    &[data-menu-is-open="true"]{
        transform: translateX(0);
        display: block;
    }
    
`

export const Header = styled.header`
    width: 100%;
    height: 12rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    margin-bottom: 3rem;
    position: absolute;
    top: 0;
    right: 0;

    >button{
        margin: 7rem 0rem 0rem 3rem;
        align-items: center;
        display: flex;
        gap: 1rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        background: none;
        border: none;
        color: white;
}

`

export const Nav = styled.nav`
    width: 100%;

    display: flex;
    flex-direction: column;

    a{
        padding: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
    }
`
