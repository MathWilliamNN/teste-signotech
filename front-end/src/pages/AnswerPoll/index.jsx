import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PollContext } from "../../context";
import { Link, useParams } from "react-router-dom";
import PollQuestionDisplay from "../../components/PollQuestionDisplay";

const StyledContainer = styled.div`
    width: 80vw;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--offwhite);
    border-radius: 0.5rem;
    box-shadow: 0.2rem 0.2rem 0.7rem rgba(0, 0, 0, 0.7);
`;

const StyledPollTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    font-family: var(--font-primary);
    color: var(--gray);
    margin: 2rem;
`;

const StyledSubmitButton = styled.button`
    width: 8rem;
    height: 3rem;
    background-color: var(--red);
    color: var(--offwhite);
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1.5rem;
    border: 2px solid var(--maroon);
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        scale: 1.05;
    }
`;

const StyledLink = styled(Link)`
    width: 8rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--red);
    border: 2px solid var(--maroon);
    border-radius: 0.5rem;

    color: var(--offwhite);
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;

    cursor: pointer;

    &:hover {
        scale: 1.05;
    }
`

const AnswerPoll = () => {
    const { createdPolls, pollsQuestions, answers, setAnswers, postResultsToDataBase } = useContext(PollContext);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const params = useParams();

    const poll = createdPolls.find((poll) => poll.id === Number(params.id));
    const questions = pollsQuestions.filter((question) => question.poll_id === Number(params.id));

    if (!poll) {
        return (
            <StyledContainer>
                <StyledPollTitle>Enquete não encontrada.</StyledPollTitle>
                <StyledLink to={"/"}>Voltar</StyledLink>
            </StyledContainer>
        );
    }

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer 
        }));
    };

    const handleSubmit = () => {

        const newResults = Object.entries(answers).map(([questionId, answer]) => ({
            poll_id: poll.id,
            question_id: Number(questionId), 
            answer: answer 
        }));

        postResultsToDataBase(newResults[0]);
        setAnswerSubmitted(true);
    };

    return (
        answerSubmitted ? (
            <StyledContainer>
                <StyledPollTitle>Obrigado por responder!</StyledPollTitle>
                <StyledLink to={"/"}>Voltar</StyledLink>
            </StyledContainer>
        ) : (
            <StyledContainer>
                <StyledPollTitle>{poll.title}</StyledPollTitle>
                {questions.map((question) => (
                    <PollQuestionDisplay
                        key={question.id}
                        question={question}
                        handleAnswerChange={handleAnswerChange}
                    />
                ))}
                <StyledSubmitButton onClick={handleSubmit}>Enviar</StyledSubmitButton>
            </StyledContainer>
        )
    );
};

export default AnswerPoll;


