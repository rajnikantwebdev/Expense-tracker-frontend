import { createContext, useState } from "react";

export const RefreshContext = createContext()

const RefreshContextProvider = ({children}) => {
    const [refresh, setRefresh] = useState(false)
    return (
        <RefreshContext.Provider value={{refresh, setRefresh}} >
            {children}
        </RefreshContext.Provider>
    )
}

export default RefreshContextProvider;