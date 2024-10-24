import styled from "styled-components"
import PollProperties from "./PollProperties"
import { useContext } from "react"
import { PollContext } from "../../context"


const DisplayContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    width: 80vw;
    height: 50%;
    padding: .5rem;

    background-color: var(--offwhite);
    border-radius: 0.5rem;
    box-shadow: .2rem .2rem .7rem rgba(0, 0, 0, 0.7);

`


const PollDisplay = () => {
    const {createdPolls} = useContext(PollContext);
    console.log(createdPolls);
    return (
        <>
            <DisplayContainer> 
                <PollProperties header/>
                    {createdPolls.map((poll) => (
                        <PollProperties title={poll.title} startingDate={poll.startingDate} finishingDate={poll.finishingDate}/>
                    ))}
            </DisplayContainer>
        </>
    )

}

export default PollDisplay