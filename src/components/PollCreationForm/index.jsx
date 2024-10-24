import styled from "styled-components"
import PollQuestions from "./PollQuestions"
import { useContext } from "react"
import { PollContext } from "../../context"


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
    font-weight: 600;

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

    const { pollStructure, setPollStructure } = useContext(PollContext);


const addQuestion = (questionType) => {
    const openQuestion = {
        id: pollStructure.length + 1,
        type: questionType,
    };

    setPollStructure([...pollStructure, openQuestion]);
};

    return (
        
        <PollFormContainer>
            <StyledButtonsContainer>
                <StyledAddQuestionButton onClick={()=> addQuestion("open")}> Adicionar questão aberta </StyledAddQuestionButton>
                <StyledAddQuestionButton onClick={()=> addQuestion("closed")}> Adicionar questão fechada </StyledAddQuestionButton>
            </StyledButtonsContainer>   
            <StyledQuestionsContainer>
                <PollQuestions />
            </StyledQuestionsContainer>
        </PollFormContainer>
    )
}

export default PollCreationForm