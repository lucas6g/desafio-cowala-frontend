import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#ffffff;
    --blue-dark: #0A1633;
    --gray:#EDEDED;
    --blue-ligth:#00D9D0;
   

  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

      @media(min-width:720px){
           font-size: 16px;
        
        }
       
    
  }

 
  body {
    background-color: var(--background);
    -webkit-font-smoothing:antialiased;
  }
  body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    
  }
 
  button {
    cursor: pointer;
  }
  .swal-modal {
  background-color: var(--background);
  border-radius: 0;
}
.swal-button-container {
  width: 100%;
  max-width: 100%;
  
}

.swal-button--confirm {
  width: 100%;
  max-width: 100%;
  background-color: var(--blue-dark);
  padding:  1.5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: var(--background);
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 0px;
  border: none;
     transition: all 0.4s;

  }
 
  .swal-button.swal-button--confirm:hover {
  background-color: var(--blue-ligth);
}
.swal-footer  {
  display: flex;
  justify-content: center;
 
  width: 100%;
  margin-top: 32px;
  
  
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
     box-shadow: 0 0 0 30px white inset !important;
}
  
`