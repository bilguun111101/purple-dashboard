import { useContext, useState } from "react";
import { createContext } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [active_button, setActive_button] = useState( new Array(5).fill(false) );
    return (
        <DashboardContext.Provider value={{ active_button, setActive_button }}>
            { children }
        </DashboardContext.Provider>
    )
}

export const useDashboard = () => useContext(DashboardContext);