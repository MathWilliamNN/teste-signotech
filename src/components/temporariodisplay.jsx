import styled from "styled-components";

const StyledPollContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledQuestionsContainer = styled.div`
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        font-family: var(--font-primary);
    }
`;

const StyledPollQuestion = styled.label`
    color: var(--gray);
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem;
`;

const StyledOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0; 
`;

const StyledAnswerInput = styled.input`
    display: none;
`;

const StyledCustomCheckbox = styled.label`
    position: relative;
    cursor: pointer;
    padding-left: 30px;
    user-select: none;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border: 2px solid gray;
        border-radius: 4px;
        background-color: white;
        transition: background-color 0.2s, border-color 0.2s;
    }

    ${StyledAnswerInput}:checked + &::before {
        background-color: var(--red); 
        border-color: var(--red);
    }

    &:hover::before {
        border-color: var(--red); 
    }
`;

const PollQuestion = () => {
    const questions = [
        {
            id: 1,
            type: "fechada",
            question: "Qual a sua cor favorita?",
            options: ["Azul", "Verde", "Vermelho"]
        },
        {
            id: 2,
            type: "fechada",
            question: "Qual seu animal preferido?",
            options: ["Cachorro", "Gato", "Pássaro"]
        }
    ];

    return (
        <StyledPollContainer>
            {questions.map((question) => (
                <StyledQuestionsContainer key={question.id}>
                    <StyledPollQuestion>
                        {question.id}. {question.question}
                    </StyledPollQuestion>
                    {question.options.map((option, index) => (
                        <StyledOptionsContainer key={index}>
                            <StyledAnswerInput 
                                id={`option-${question.id}-${index}`} 
                                type="checkbox" 
                            />
                            <StyledCustomCheckbox htmlFor={`option-${question.id}-${index}`}>
                                {option}
                            </StyledCustomCheckbox>
                        </StyledOptionsContainer>
                    ))}
                </StyledQuestionsContainer>
            ))}
        </StyledPollContainer>
    );
};

export default PollQuestion;
