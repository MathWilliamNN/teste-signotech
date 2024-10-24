import { useContext } from "react";
import styled from "styled-components";
import { PollContext } from "../../../context";

const StyledPollContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const StyledQuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const StyledOptionsContainer = styled.div`
    margin: auto;
    display: flex;
    gap: 2rem;
`;
const StyledTitle = styled.h2`
    font-family: var(--font-primary);
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem;
`;
const StyledQuestionInput = styled.input`
    width: 80%;
    height: 2rem;
    margin: auto;
    font-family: var(--font-primary);
`;
const StyledOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    & > * {
        font-family: var(--font-primary);
    }
`;

const PollQuestions = () => {
    const { pollStructure } = useContext(PollContext); 

    return (
        pollStructure.length > 0 ? (
            <StyledPollContainer>
                <StyledTitle> Título da enquete: </StyledTitle>
                <StyledQuestionInput type="text" />
                {pollStructure.map((item) => (
                    <StyledQuestionContainer key={item.id}>
                        {item.type === "closed" ? (
                            <>
                                <StyledTitle> Pergunta {item.id}: </StyledTitle>
                                <StyledOptionsContainer>
                                    <StyledOption>
                                        Opção 1 <input type="text" />
                                    </StyledOption>
                                    <StyledOption>
                                        Opção 2 <input type="text" />
                                    </StyledOption>
                                    <StyledOption>
                                        Opção 3 <input type="text" />
                                    </StyledOption>
                                    <StyledOption>
                                        Opção 4 <input type="text" />
                                    </StyledOption>
                                    <StyledOption>
                                        Opção 5 <input type="text" />
                                    </StyledOption>
                                </StyledOptionsContainer>
                            </>
                        ) : (
                            <>
                                <StyledTitle> Pergunta {item.id}: </StyledTitle>
                                <StyledQuestionInput type="text" />
                            </>
                        )}
                    </StyledQuestionContainer>
                ))}
            </StyledPollContainer>
        ) : (
            <StyledTitle>Selecione um tipo de questão para começar a criação da enquete!</StyledTitle>
        )
    );
};

export default PollQuestions;
