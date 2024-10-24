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

const PollProperties = ({ header, title, startingDate, finishingDate }) => {

    const formatDate = (ISOdate) => {
        console.log(ISOdate);
        const date = new Date(ISOdate);
        console.log('data:' , date)
        const day = String(date.getDate()).padStart(2, '0');
        console.log('dia:' , day)
        const month = String(date.getMonth() + 1).padStart(2, '0');
        console.log('mes:' , month)
        const year = String(date.getFullYear()); 
        console.log('ano:' , year)


        return `${day}-${month}-${year}`;
    }

    const getStatus = (startingDate, finishingDate) => {

        const todayDate = new Date();
        const start = new Date(startingDate);
        const finish = new Date(finishingDate);
    
        if (todayDate < start) {
            return "Não iniciada";
        } else if (start <= todayDate && todayDate <= finish) {  
            return "Em andamento";
        } else {
            return "Finalizada";
        }
    };

    return header ?

        <StyledPoll>
            <PollProperty style={{ fontWeight: "600" }}> Nome da enquete</PollProperty>
            <PollProperty style={{ fontWeight: "600" }}> Data de início </PollProperty>
            <PollProperty style={{ fontWeight: "600" }} > Data de término </PollProperty>
            <PollProperty style={{ fontWeight: "600" }} > Status </PollProperty>
        </StyledPoll>

        :

        <StyledPoll>
            <PollProperty> {title} </PollProperty>
            <PollProperty> {formatDate(startingDate)} </PollProperty>
            <PollProperty> {formatDate(finishingDate)} </PollProperty>
            <PollProperty> {getStatus(startingDate, finishingDate)} </PollProperty>
        </StyledPoll>
}

export default PollProperties