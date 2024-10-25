import { useContext } from "react"
import styled from "styled-components"
import { PollContext } from "../../context"
import PollProperties from "./PollProperties"


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


    return (
        <>
            <DisplayContainer>
                <PollProperties header/>
                    {createdPolls.map((poll, index) => (
                        <PollProperties key={index} poll={poll}/>
                    ))}
            </DisplayContainer>
        </>
    )

}

export default PollDisplay