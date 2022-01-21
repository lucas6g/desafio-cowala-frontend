import styled from "styled-components";




export const Container = styled.div`
    height: 100vh;
    


    
    
    `
export const Content = styled.div`
    
    height: 100vh;
    @media(min-width:1080px){
        width: 100%;
        height: 524px;
        margin: 70px auto 0;
       
        

    }

`
export const FormContainer = styled.main`
    background-color: var(--gray);
    height: 100%;
    padding: 1.5rem;
    
    
    @media(min-width:1080px){
        width: 100%;
        height: initial;

        max-width: 960px;
      
        margin: 70px auto 0;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media(min-width:720px){
        gap: 2rem;
    }
       
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;

    gap:8px;

    @media(min-width:1080px){
  flex-direction: row;

    }



`
export const SearchIpBox = styled.div`
    display: flex;
    
   
   


`
export const InputLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap:2rem;
   

   
    
    
    @media(min-width:720px){
        flex-direction: row;
        gap:8px;
    }

    
    
`



