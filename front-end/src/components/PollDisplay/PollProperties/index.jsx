import styled from "styled-components"
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledPoll = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr 1fr 1fr; 
    align-items: center;

    border-bottom: 2px solid var(--maroon);

    font-family: var(--font-primary);
    font-size: 1rem;

    `
const PollProperty = styled.h2`
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    gap: 4rem;
    
    &:not(:last-child) {
        border-right: 2px solid var(--maroon); 
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--red);

    display: flex;
    align-items: center;
    gap: .5rem;
`

const PollProperties = ({ header, poll }) => {

    const formatDate = (ISOdate) => {
        const date = new Date(ISOdate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());

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
            <PollProperty>
                {poll.title}

                {getStatus(poll.startingDate, poll.finishingDate) === "Em andamento" && (
                    <StyledLink to={`/AnswerPoll/${poll.id}`}>
                        <FaWpforms size={25} /> Responder
                    </StyledLink>
                )}
            </PollProperty>
            <PollProperty> {formatDate(poll.startingDate)} </PollProperty>
            <PollProperty> {formatDate(poll.finishingDate)} </PollProperty>
            <PollProperty> {getStatus(poll.startingDate, poll.finishingDate)} </PollProperty>
        </StyledPoll>
}

export default PollProperties