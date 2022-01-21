import styled from 'styled-components'



export const Container = styled.button`
    width: 100%;
    max-width: 100%;
    background-color: var(--blue-dark);;
    padding:  1.5rem;
    height: 3rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: var(--background);
    text-transform: uppercase;

    transition: all 0.4s;
  
    &:hover {
  background-color: var(--blue-ligth);
}
   
`