import { styled } from 'styled-components'

export const Container = styled.div`
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        .buttons{
            
            background: none;
            border: none;

            svg{    
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }

        > button:nth-child(4){
            width: 12rem;
        }

        
`