import { useContext } from "react";
import styled from "styled-components";
import { PollContext } from "../../../context";

const StyledPollContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const StyledPollInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
`;

const StyledTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
`
const StyledDateContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
`;
const StyledLabel = styled.label`
    font-family: var(--font-primary);
    font-size: 1.2rem;
    font-weight: 500;
`;
const StyledQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const StyledOptionsContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const StyledTitle = styled.h2`
    font-family: var(--font-primary);
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1rem;
    text-align: center;
`;
const StyledQuestionInput = styled.input`
    width: 80%;
    height: 2rem;
    margin: auto;
    font-family: var(--font-primary);
`;
const StyledOption = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-primary);
`;
const StyledSubmitButton = styled.button`
    width: 10rem;
    height: 2rem;

    background-color: var(--maroon);
    color: var(--offwhite);
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1.2rem;

    border: none;
    border-radius: 0.5rem;

    cursor: pointer;
    &:hover {
        scale: 1.05;
    }
`;

const PollQuestions = () => {
    const { pollStructure, setPollStructure, createdPolls, setCreatedPolls } = useContext(PollContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const startingDate = event.target.startingDate.value;
        const finishingDate = event.target.finishingDate.value;

        const questions = Array.from(pollStructure).map((item, index) => {
            const questionText = event.target[`question_${item.id}`].value;

            const options = item.type === "closed"
                ? Array.from(event.target.querySelectorAll(`input[name="option_${item.id}"]`)).map(input => input.value.trim()).filter(value => value)
                : [];

            return {
                id: item.id,
                type: item.type,
                question: questionText,
                options: options,
            };
        });

        const pollData = {
            id: createdPolls.length + 1,
            title: title,
            startingDate: startingDate,
            finishingDate: finishingDate,
            questions: questions,
        };

        setPollStructure([]);
        setCreatedPolls([...createdPolls, pollData]);
    };

    return (
        pollStructure.length > 0 ? (
            <StyledPollContainer onSubmit={handleSubmit}>
                <StyledPollInfo>
                    <StyledTitleContainer>
                        <StyledTitle> Título da enquete: </StyledTitle>
                        <StyledQuestionInput name="title" type="text" placeholder="Digite o nome da enquete..." required />
                    </StyledTitleContainer>
                    <StyledDateContainer>
                        <div>
                            <StyledLabel> Data de início: </StyledLabel>
                            <StyledQuestionInput name="startingDate" type="date" required />
                        </div>
                        <div>
                            <StyledLabel> Data de término: </StyledLabel>
                            <StyledQuestionInput name="finishingDate" type="date" required />
                        </div>
                    </StyledDateContainer>
                </StyledPollInfo>
                {pollStructure.map((item) => (
                    <StyledQuestionContainer key={item.id}>
                        <StyledTitle> Pergunta {item.id}: </StyledTitle>
                        <StyledQuestionInput name={`question_${item.id}`} type="text" placeholder="Digite a pergunta aqui..." required />
                        {item.type === "closed" && (
                            <StyledOptionsContainer>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <StyledOption key={i}>
                                        Opção {i + 1} <input type="text" name={`option_${item.id}`} />
                                    </StyledOption>
                                ))}
                            </StyledOptionsContainer>
                        )}
                    </StyledQuestionContainer>
                ))}
                <StyledSubmitButton type="submit"> Criar </StyledSubmitButton>
            </StyledPollContainer>
        ) : (
            <StyledTitle>Selecione um tipo de questão para começar a criação da enquete!</StyledTitle>
        )
    );
};

export default PollQuestions;
