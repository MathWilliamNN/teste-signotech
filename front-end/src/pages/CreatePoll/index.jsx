import styled from "styled-components"
import PollCreationForm from "../../components/PollCreationForm"

const StyledTitle = styled.h2`
    color: var(--gray);
    font-size: 2rem;
    font-family: var(--font-primary);
    font-weight: 600;
    padding-bottom: 1rem;
`
const StyledContainer = styled.div`
    padding: 2rem 2rem;
    width: 80vw;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    background-color: var(--offwhite);
    border-radius: 0.5rem;
    box-shadow: .2rem .2rem .7rem rgba(0, 0, 0, 0.7);
`
const CreatePoll = () => {
    return (
        <StyledContainer>
            <StyledTitle> Crie a sua enquete </StyledTitle>
            <PollCreationForm />
        </StyledContainer >
    )
}


export default CreatePoll