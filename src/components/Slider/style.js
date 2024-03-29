import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 12rem;
    width: 100%;
    overflow-x: auto;
    position: relative;
    animation: leftToRight 0.3s ease-in;
    overflow-x: hidden;

    > h2 {
        left: 12rem;
        position: relative;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        margin-bottom: 2.4rem;
        z-index: 1;
        animation: SliderAnimation 1000ms ease-in-out;
    }
`;

export const ControlLeft = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 17rem;
    left: 1rem;
    height: 5rem;
    width: 5rem;
    font-size: 2.7rem;
    z-index: 1;
    border-radius: 50%;
    transition: all 0.3s;
    background: transparent;

    svg {
        transition: all ease 0.3s;
    }

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.COLORS.DARK_1000};
    }

    &:hover svg {
        transform: scale(1.3);
    }

    @media (max-width: 1049px) {
        left: 0rem;
    }
`;

export const ControlRight = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 17rem;
    right: 1rem;
    padding-left: 0.6rem;
    height: 5rem;
    width: 5rem;
    font-size: 2.7rem;
    z-index: 1;
    border-radius: 50%;
    transition: all 0.3s;
    background: transparent;
    

    svg {
        transition: all ease 0.3s;
    }

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.COLORS.DARK_1000};
    }

    &:hover svg {
        transform: scale(1.3);
    }

    @media (max-width: 1049px) {
        right: 0rem;
    }
`;

export const GradientLeft = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 100%;
    width: 27.7rem;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
    pointer-events: none;

    @media (max-width: 1049px) {
        width: 7rem;
    }
`;

export const GradientRight = styled.div`
    position: absolute;
    top: 0rem;
    left: -0.1rem;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    height: 100%;
    width: 27.7rem;
    background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
    pointer-events: none;

    @media (max-width: 1049px) {
        width: 7rem;
    }
`;

export const Content = styled.div`

    position: relative;
    display: flex;
    gap: 2.7rem;
    padding: 0 15rem;

    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > div {
        scroll-snap-align: center;
    }

    @media (max-width: 1049px) {
        padding: 0 4rem;
    }

    animation: SliderAnimation 1000ms ease-in-out;

    @keyframes SliderAnimation {
    0% {
        transform: translateX(50%);
        opacity: 0%;
    }
    100% {
        transform: translateX(0);
        opacity: 100%;
    }
 
}
    
`;