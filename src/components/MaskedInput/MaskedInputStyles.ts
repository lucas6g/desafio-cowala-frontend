import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'



interface ContainerProps {
  isError: boolean;
}


interface StyledInputProps {
  isFocus: boolean;
  isError: boolean;
}


export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    font-size: 1rem;  

    label {
      
      font-weight: 500;
      margin-bottom: 5px;
     
    }
    
    
    ${(props) =>
    props.isError &&
    css`
         margin-bottom: 16px;
         margin-top: 16px;
     
        
        `}
    

        label {
          ${(props) =>
    props.isError &&
    css`
        color: red;
        
        `}
        }
        span {
          color: red;
        }
   
 `
export const StyledInput = styled(InputMask) <StyledInputProps>`
        border: none;
        width: 100%;
        outline: none;
        height:100%;
        font-size: 1rem;
      
        padding: 1rem;
       
        ${(props) =>
    props.isFocus &&
    css`
        border: 2px solid ;
        border-color: var(--blue-dark);
        
        `}
        
        ${(props) =>
    props.isError &&
    css`
        border-color: red;
        border-width: 1px;
        
        `}
 `


