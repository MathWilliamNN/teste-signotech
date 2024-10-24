import { createContext, useState } from "react";


export const PollContext = createContext()

export const PollContextProvider = ({children}) => {

    const [pollStructure, setPollStructure] = useState([]);
    const [createdPolls, setCreatedPolls] = useState([]);
    
    return (
        <PollContext.Provider value={{pollStructure, setPollStructure, createdPolls, setCreatedPolls}}>
            {children}
        </PollContext.Provider>
    )
}
