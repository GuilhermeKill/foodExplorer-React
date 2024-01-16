import { styled } from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100%;
   
    @media (max-width: 731px) {
        header{
            display: none;
        }
    }
    
`

export const Add = styled.div`
    top: 1.5rem;
    gap: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0.31rem;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    align-items: center;
    justify-content: center;

    > span{
        position: absolute;
        left: 0rem;
        bottom: 3.5rem;
        font-weight: 300;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        color: ${({ theme }) => theme.COLORS.LIGH_400};
        
    }

    > label{
        gap: 1rem;
        z-index: 1;
        left: 1rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
    

        font-weight: 300;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        color: ${({ theme }) => theme.COLORS.LIGH_400};

        cursor: pointer;
        
        input{
            z-index: 2;
            display: none;
            position: absolute;
        }
    }
   
`


export const Form = styled.form`
    margin-bottom: 20rem;
    display: flex;
    flex-direction: column;
    padding: 0 8rem;
    gap: 2rem;

    .top{
        display: flex;
        flex-direction: row;
        gap: 2rem;

        > div:nth-child(1){
            width: 20.31rem;
 
            @media (max-width: 1300px) {
                font-size: 12px;
            }
             
       
        }



        > div:nth-child(2){
            width: 30.75rem;

        }

        > div:nth-child(3){
            width: 50rem;

        }
    }
    .mid{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 2rem;

        > div:nth-child(2){
            width: 15.31rem;

        }
    }

    h1{
        font-weight: 500;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
    }

    .buttons{
        gap: 1rem;
        display: flex;
        margin-left: auto;

         > button:nth-child(1){
            background: #AB4D55;
            font-size: 0.7rem;
            width: 10.75rem;

        }
    }


     .top{
        @media (max-width: 731px) {
                display: flex;
                flex-direction: column;

                gap: 4rem;

                > div:nth-child(1){
                    margin-top: 1.5rem;
                    width: 100%;
                    height: 3.5rem;

                    >span{
                        margin-bottom: 0.5rem;
                    }
 
       
                }
                > div:nth-child(2){
                    width: 100%

                }

                > div:nth-child(3){
                    width: 100%;

                }
               
            }
    }

    .mid{
        @media (max-width: 731px) {
                display: flex;
                flex-direction: column;

                gap: 1rem;

                > section:nth-child(1){
                    width: 100%;
                    margin-top: 1.5rem ;
                    margin-bottom: 0;

                    >span{
                        margin-bottom: .5rem;
                    }
 
       
                }
                > div:nth-child(2){
                    width: 100%

                }

            }
    }

    .buttons{
        button:nth-child(1){
            background: ${({ theme }) => theme.COLORS.DARK_800};
        }

        
        @media (max-width: 731px) {
                width: 100%;

                gap: 1rem;

                > button:nth-child(1){
                    font-size: 1rem;
                    width: 50rem;
                }   
    }
    }
    animation: FormAnimation 800ms ease-in-out;
`