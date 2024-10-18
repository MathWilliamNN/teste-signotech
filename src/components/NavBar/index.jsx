import { Link } from "react-router-dom"
import styled from "styled-components"
import { MdCreateNewFolder } from "react-icons/md";


const StyledNav = styled.aside`
    width: 15vw;
    height: 50vh;
    display: flex;
    flex-direction: column;

    padding: 0.5rem;

    background-color: var(--offwhite);
    border-radius: 0.5rem;
    box-shadow: .2rem .2rem .7rem rgba(0, 0, 0, 0.7);

`

const StyledLink = styled(Link)`

    height: 5vh;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    background-color: var(--maroon);
    border-radius: 0.5rem;

    color: var(--offwhite);
    font-size: 1.2rem;
    font-family: var(--font-primary);
    font-weight: 700;
    text-decoration: none;

    &:hover {
        scale: 1.02;
    }
`

const NavBar = () => {
    return (
        <>
            <StyledNav>
                <StyledLink to={"/CreatePoll"}> <MdCreateNewFolder /> Criar Enquete </StyledLink>
            </StyledNav>
        </>
    )
}

export default NavBar