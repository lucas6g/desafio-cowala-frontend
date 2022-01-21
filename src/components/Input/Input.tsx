import { InputHTMLAttributes, useState } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { FaSearchLocation } from 'react-icons/fa';

import { ThreeDots } from "react-loader-spinner";

import {
    Container,
    StyledInput,
    InputWhitButton



} from './InputStyles'



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: FieldError;
    register: UseFormRegister<FieldValues>
    hasButton?: boolean
    isButtonLoading?: boolean
    onClickButton?: () => void

}


export function Input({
    name,
    label,
    error,
    register,
    hasButton = false,
    isButtonLoading,
    onClickButton,
    ...rest
}: InputProps) {

    const [isInputFocus, setIsInputFocus] = useState(false);


    if (hasButton) {

        return (
            <Container isError={!!error}>


                {!!label && <label htmlFor={name}>{label}</label>}
                <InputWhitButton>


                    <StyledInput


                        isFocus={isInputFocus}
                        isError={!!error}
                        id={name}
                        onFocus={() => setIsInputFocus(true)}
                        {...register(name)}
                        onBlur={() => setIsInputFocus(false)}
                        {...rest}
                    />

                    <button onClick={onClickButton} type='button'>


                        {


                            isButtonLoading ?

                                <ThreeDots

                                    color="#ffffff"
                                    height={24}
                                    width={24}
                                /> :
                                <FaSearchLocation
                                    color="#0A1633"
                                    size={24}
                                />
                        }


                    </button>
                </InputWhitButton>
                {!!error && (<span>{error.message}</span>)}



            </Container>
        )

    }


    return (
        <Container isError={!!error}>


            {!!label && <label htmlFor={name}>{label}</label>}
            <StyledInput

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