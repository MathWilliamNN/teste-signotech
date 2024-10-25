import styled from "styled-components"

const StyledContainer = styled.section`
    display: flex;
    margin: 2rem;
    gap: 3rem;
`


const MainContainer = ({children}) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default MainContainer