import { InputHTMLAttributes, useState } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';



import {
    Container,
    StyledInput,



} from './MaskedInputStyles'



interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: FieldError;
    register: UseFormRegister<FieldValues>
    mask: string


}


export function MaskedInput({
    name,
    label,
    error,
    register,
    mask,
    ...rest
}: MaskedInputProps) {

    const [isInputFocus, setIsInputFocus] = useState(false);


    return (
        <Container isError={!!error}>


            {!!label && <label htmlFor={name}>{label}</label>}
            <StyledInput


                mask={mask}
                isFocus={isInputFocus}
                isError={!!error}
                id={name}
                onFocus={() => setIsInputFocus(true)}
                {...register(name)}
                onBlur={() => setIsInputFocus(false)}
                {...rest}
            />
            {!!error && (<span>{error.message}</span>)}
        </Container>
    )
}