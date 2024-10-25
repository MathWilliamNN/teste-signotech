import styled from "styled-components"
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PollContext } from "../../../context";

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


    const {formatDate} = useContext(PollContext);


    const convertDateToISO = (dateString) => {
        const [day, month, year] = dateString.split('-').map(Number);
        const fullYear = year < 100 ? 2000 + year : year; 
        return new Date(fullYear, month - 1, day).toISOString().split('T')[0];
    };

    const getStatus = (startingDate, finishingDate) => {
        const isoStartingDate = convertDateToISO(startingDate);
        const isoFinishingDate = convertDateToISO(finishingDate);
        
        const todayDate = new Date().toISOString().split('T')[0];
    
        if (todayDate < isoStartingDate) {
            return "Não iniciada";
        } else if (isoStartingDate <= todayDate && todayDate <= isoFinishingDate) {
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

                {getStatus(poll.starting_date, poll.finishing_date) === "Em andamento" && (
                    <StyledLink to={`/AnswerPoll/${poll.id}`}>
                        <FaWpforms size={25} /> Responder
                    </StyledLink>
                )}
            </PollProperty>
            <PollProperty> {poll.starting_date} </PollProperty>
            <PollProperty> {poll.finishing_date} </PollProperty>
            <PollProperty> {getStatus(poll.starting_date, poll.finishing_date)} </PollProperty>
        </StyledPoll>
}

export default PollProperties