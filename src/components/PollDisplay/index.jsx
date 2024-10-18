import styled from "styled-components"


const DisplayContainer = styled.div`
    width: 80vw;
    padding: .5rem;

    background-color: var(--offwhite);
    border-radius: 0.5rem;
    box-shadow: .2rem .2rem .7rem rgba(0, 0, 0, 0.7);

`

const PollDisplay = () => {
    return (
        <>
            <DisplayContainer> display </DisplayContainer>
        </>
    )

}

export default PollDisplay