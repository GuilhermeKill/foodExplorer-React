import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    :root{
        font-size: 16px;
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            font-size: 13px;
     }
     @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
            font-size: 11px;
     }

     @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            font-size: 9px;
     }
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body, input, button, textarea{
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        outline: none;
    } 
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
    



`