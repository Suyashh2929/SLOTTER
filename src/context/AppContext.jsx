import { createContext } from "react";
import { doctors } from "../assets/frontend/assets";

export const DocContext= createContext();

const AppContextProvider=(props)=>{


    const value={
        doctors
    }

    return(
        <DocContext.Provider value={value}>
                {props.children}
        </DocContext.Provider>
    )
}

export default  AppContextProvider