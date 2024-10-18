import styled from "styled-components"
import PollQuestion from "./PollQuestion"


const PollFormContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

`
const StyledAddQuestionButton = styled.button`
    background-color: var(--maroon);
    padding: 0.5rem;
    
    color: var(--offwhite);
    font-family: var(--font-primary);
    font-size: 1.2rem;

    border-radius: .5rem;
    border: none;
    cursor: pointer;

    &:hover{
        scale: 1.02;
    }
`
const StyledButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`
const StyledQuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const PollCreationForm = () => {
    return (
        <PollFormContainer>
            <StyledButtonsContainer>
                <StyledAddQuestionButton> Adicionar questão aberta </StyledAddQuestionButton>
                <StyledAddQuestionButton> Adicionar questão fechada </StyledAddQuestionButton>
            </StyledButtonsContainer>
            <StyledQuestionsContainer>
                <PollQuestion/>
            </StyledQuestionsContainer>
        </PollFormContainer>
    )
}

export default PollCreationForm