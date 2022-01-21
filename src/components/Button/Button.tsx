import { ButtonHTMLAttributes, ReactNode } from 'react';
import {
    Container,

} from './ButtonStyles'



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    children: ReactNode;


}

export function Button({ children, isLoading, ...rest }: ButtonProps) {
    return (
        <Container   {...rest} >
            {children}
        </Container>
    )
}
