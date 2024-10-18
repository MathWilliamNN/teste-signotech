import styled from "styled-components"



const StyledPoll = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr 1fr 1fr; 
    align-items: center;

    border-bottom: 2px solid var(--maroon);

    font-family: var(--font-primary);
    font-size: 1rem;

    `

const PollProperty = styled.h2`
    padding: 0.5rem;
    
    &:not(:last-child) {
        border-right: 2px solid var(--maroon); 
    }
`;

const PollProperties = ({ header }) => {
    return header ?

        <StyledPoll>
            <PollProperty style={{ fontWeight: "600" }}> Nome da enquete</PollProperty>
            <PollProperty style={{ fontWeight: "600" }}> Data de início </PollProperty>
            <PollProperty style={{ fontWeight: "600" }} > Data de término </PollProperty>
            <PollProperty style={{ fontWeight: "600" }} > Status </PollProperty>
        </StyledPoll>

        :

        <StyledPoll>
            <PollProperty> Nome da enquete</PollProperty>
            <PollProperty> Data de inicio </PollProperty>
            <PollProperty> Data de término </PollProperty>
            <PollProperty> Status </PollProperty>
        </StyledPoll>
}

export default PollProperties