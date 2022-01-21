import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { useForm } from 'react-hook-form';
import swal from '@sweetalert/with-react'


import {
    Container,
    Content,
    FormContainer,
    Form,
    ButtonBox,
    InputLine,


} from "./HomeStyles";
import { Button } from "../../components/Button/Button";


import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import { MaskedInput } from "../../components/MaskedInput/MaskedInput";
import { useState } from "react";
import { fastIp } from "../../services/fastIp";




type FormData = {
    name: string
    profession: string
    cellphone: string
    ipaddress: string

}
const formSchema = yup.object().shape({
    name: yup.string().required('O campo nome é obrigátorio.')
        .matches(/^[aA-zZ\s]+$/, "Já viu algum nome possuir numeros."),
    profession: yup.string().required('O campo profissão é obrigátorio.')
        .matches(/^[aA-zZ\s]+$/, "Digite apenas Letras."),
    ipaddress: yup.string().required('O campo ip é obrigátorio.'),
    cellphone: yup.string()
        .test("len", "Digite um telefone valido", (inputValue) => {
            const inputValuelengthWhitOnlyNumbers = inputValue?.replace(/\D+/g, "").length;
            return inputValuelengthWhitOnlyNumbers === 12;
        }).required('O campo celular é obrigátorio'),

})

export function Home() {



    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const [isButtonLoading, setIsButtonLoading] = useState(false)

    const handleSignIn = async (values: FormData) => {

        localStorage.setItem('@cowala:data', JSON.stringify(values))

        swal("Deu Tudo Certo!", "Dados Salvos com Sucesso.", {
            icon: 'success',
            button: {
                text: 'Fechar'
            }
        });

    }


    async function handleClean() {

        localStorage.removeItem('@cowala:data')
        setValue('cellphone', '')
        reset()
    }

    async function handleGetIpAddress() {


        try {

            setIsButtonLoading(true)


            const response = await fastIp.get('/')
            setValue('ipaddress', response.data, { shouldValidate: true })


            setIsButtonLoading(false)
        } catch (error) {
            swal("Ops algo deu errado!", "Tente novamente mais tarde", {
                icon: 'error',
                button: {
                    text: 'Fechar'
                }
            })
        } finally {
            setIsButtonLoading(false)

        }
    }



    return (
        <Container >
            <Header />
            <Content>
                <FormContainer>
                    <Form onSubmit={handleSubmit(handleSignIn)}>
                        <Input
                            register={register}
                            error={errors.name}
                            label="Nome"
                            name="name"
                            type="text"

                        />

                        <InputLine >

                            <Input
                                register={register}
                                error={errors.profession}
                                label="Profissão"
                                name="profession"
                                type="text"

                            />

                            <MaskedInput
                                register={register}
                                mask="(999) 99999-9999"
                                error={errors.cellphone}
                                label="Celular"
                                name="cellphone"
                                type="tel"



                            />


                        </InputLine>
                        <Input
                            register={register}
                            error={errors.ipaddress}
                            label="Meu Ip"
                            name="ipaddress"
                            type="text"
                            hasButton
                            onClickButton={handleGetIpAddress}
                            isButtonLoading={isButtonLoading}
                            readOnly

                        />
                        <ButtonBox>
                            <Button type="button" onClick={() => handleClean()} >
                                Limpar
                            </Button>
                            <Button type="submit" >
                                Salvar
                            </Button>

                        </ButtonBox>
                    </Form>
                </FormContainer>

            </Content>
        </Container>
    )
}