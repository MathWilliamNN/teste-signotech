import { useContext } from "react"
import styled from "styled-components"
import { PollContext } from "../../context"
import { FaPoll } from "react-icons/fa";

const StyledQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;

    margin: 2rem;
`

const StyledQuestionText = styled.h2`
    font-family: var(--font-primary);
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--gray);
`
const StyledOptionsLabel = styled.h3`
    display: flex;
    align-items: center;

    font-family: var(--font-primary);
    font-size: 1rem;
`
const StyledOptionInput = styled.input`
    margin: 0 1rem;
`
const StyledTextInput = styled.textarea`
    font-family: var(--font-primary);
    font-size: 1rem;

    height: 4rem;
    width: 100%;
    resize: none;

    border-radius: .5rem;
    border: 1px solid;;

    &::placeholder {
        padding: .5rem;
        font-family: var(--font-primary);
    }
`
const StyledResultsDisplay = styled.span`
    color: var(--maroon);

    display: flex;
    align-items: center;
    gap: .2rem;
    margin: 0 2rem;
`


const PollQuestionDisplay = ({ question, handleAnswerChange }) => {

    const { pollResults } = useContext(PollContext);

    const calculateVotes = (questionId) => {
        let voteCount = {};

        pollResults.forEach(result => {
            const answer = result.answers[questionId];
            if (answer) {
                voteCount[answer] = (voteCount[answer] || 0) + 1;
            }
        });

        return voteCount;
    };

    const votes = calculateVotes(question.id);

    return (
        <StyledQuestionContainer>
            <StyledQuestionText> {question.id}. {question.question} </StyledQuestionText>
            {question.type === 'closed' ? (
                question.options.map((option, index) => (
                    <StyledOptionsLabel key={index} >
                        <StyledOptionInput
                            type="radio"
                            name={`question_${question.id}`}
                            value={option}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)} />
                        {option} 
                        <StyledResultsDisplay> <FaPoll/> {votes[option] || 0} </StyledResultsDisplay>
                    </StyledOptionsLabel>
                ))
            ) :
            <StyledTextInput type="text" placeholder="Digite sua resposta..." onChange={(e) => handleAnswerChange(question.id, e.target.value)} />
            }
        </StyledQuestionContainer>
    )

}

export default PollQuestionDisplay   