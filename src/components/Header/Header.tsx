import { Brand, Container, Logo, LogoContainer } from "./HeaderStyles";

import LogoImg from '../../assets/logo.png'
import BrandImg from '../../assets/cowala_name.svg'


export function Header() {
    return (
        <Container>
            <a href="/">

                <LogoContainer>
                    <Logo src={LogoImg} alt="Cowala" />
                    <Brand src={BrandImg} alt="Cowala Sofware" />


                </LogoContainer>

            </a>

        </Container>
    )
}