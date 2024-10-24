import { createContext, useState } from "react";


export const PollContext = createContext()

export const PollContextProvider = ({children}) => {

    const [pollStructure, setPollStructure] = useState([]);
    
    return (
        <PollContext.Provider value={{pollStructure, setPollStructure}}>
            {children}
        </PollContext.Provider>
    )
}
