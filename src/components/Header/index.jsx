import styled from "styled-components"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"


const StyledHeaderDiv = styled.div`
    max-height: 20vh;
    display: flex;
    align-items: center;

    margin: 2rem;
    padding: .5rem;
    gap: 20rem;

    background-color: var(--offwhite);
    border-radius: 0.5rem;
    box-shadow: .2rem .2rem .7rem rgba(0, 0, 0, 0.9);
`
const StyledLogo = styled.img`
    height: 5rem;
`
const StyledTitle = styled.h1`
    font-family: var(--font-primary);
    color: var(--gray);
    font-size: 2.5rem;
    font-weight: 700;
`
const Header = () => {
    return (
        <>
            <StyledHeaderDiv>
                <Link to={'/'} > <StyledLogo src={Logo}/> </Link>
                <StyledTitle> Sistema de Votação </StyledTitle>
            </StyledHeaderDiv>
        </>
    )
}

export default Header