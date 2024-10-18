import styled from "styled-components"

const StyledPollLabel = styled.label`
    color: var(gray);
    font-size: 1rem;
    font-family: var(--font-primary);

`

const StyledPollInput = styled.input`
    
`


const PollQuestion = () => {
    return(
        <>
        <StyledPollLabel> Questao 1 </StyledPollLabel>
        <StyledPollInput/>
        </>
    )

}

export default PollQuestion