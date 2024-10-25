import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PollContext } from "../../context";
import { FaPoll } from "react-icons/fa";

const StyledQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    margin: 2rem;
`;

const StyledQuestionText = styled.h2`
    font-family: var(--font-primary);
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--gray);
`;

const StyledOptionsLabel = styled.h3`
    display: flex;
    align-items: center;
    font-family: var(--font-primary);
    font-size: 1rem;
`;

const StyledOptionInput = styled.input`
    margin: 0 1rem;
`;

const StyledTextInput = styled.textarea`
    font-family: var(--font-primary);
    font-size: 1rem;
    height: 4rem;
    width: 100%;
    resize: none;
    border-radius: .5rem;
    border: 1px solid;
    &::placeholder {
        padding: .5rem;
        font-family: var(--font-primary);
    }
`;

const StyledResultsDisplay = styled.span`
    color: var(--maroon);
    display: flex;
    align-items: center;
    gap: .2rem;
    margin: 0 2rem;
`;

const PollQuestionDisplay = ({ question, handleAnswerChange }) => {
    const { pollResults, questionsOptions } = useContext(PollContext);
    const [votes, setVotes] = useState({});

    const options = questionsOptions.filter((option) => option.question_id === question.id);

    useEffect(() => {
        const calculateVotes = () => {
            let voteCount = {};
            pollResults.forEach((result) => {
                // Verifica se o poll_id e o question_id correspondem ao question.id atual
                if (result.poll_id === question.poll_id && result.question_id === question.id) {
                    voteCount[result.answer] = (voteCount[result.answer] || 0) + 1;
                }
            });
            setVotes(voteCount);
        };

        calculateVotes();
    }, [pollResults, question.id, question.poll_id]);

    return (
        <StyledQuestionContainer>
            <StyledQuestionText>{question.id}. {question.question}</StyledQuestionText>
            {question.type === 'closed' ? (
                options.map((option, index) => (
                    <StyledOptionsLabel key={index}>
                        <StyledOptionInput
                            type="radio"
                            name={`question_${question.id}`}
                            value={option.option_text}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        />
                        {option.option_text}
                        <StyledResultsDisplay>
                            <FaPoll /> {votes[option.option_text] || 0}
                        </StyledResultsDisplay>
                    </StyledOptionsLabel>
                ))
            ) : (
                <StyledTextInput
                    type="text"
                    placeholder="Digite sua resposta..."
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
            )}
        </StyledQuestionContainer>
    );
};

export default PollQuestionDisplay;
