import { createContext, useState } from "react";


export const PollContext = createContext()

export const PollContextProvider = ({children}) => {

    const [pollStructure, setPollStructure] = useState([]);
    const [createdPolls, setCreatedPolls] = useState([]);
    const [answers, setAnswers] = useState([])
    const [pollResults, setPollResults] = useState([])
    
    return (
        <PollContext.Provider value={{pollStructure, setPollStructure, createdPolls, setCreatedPolls, answers, setAnswers, pollResults, setPollResults}}>
            {children}
        </PollContext.Provider>
    )
}
