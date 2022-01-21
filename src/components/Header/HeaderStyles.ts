import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 121px;
    background-color: var(--blue-dark);
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width:720px){
        justify-content: flex-start;
        align-items: center;

    }


`

export const LogoContainer = styled.div`
display: flex;
align-items: center;
gap:24px;
  
`

export const Logo = styled.img`
    height: 4rem;

   

    `
export const Brand = styled.img`
    
    width: 11.5rem;
    height: 6rem;
  
 
`