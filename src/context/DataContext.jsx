import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../components";
import useLocalStorageState from "../hooks/useLocalStorageState";
import AdminRubrics from '../models/AdminRubrics';

export const DataContext = createContext();

const AdminRubric = new AdminRubrics();

const DataProvider = ({ children }) => {

    const [dataRubric, setDataRubric] = useState({});
    const [theme, setTheme] = useLocalStorageState("theme", "dark");

    return (
        <DataContext.Provider value={{
            dataRubric,
            AdminRubric,
            setDataRubric,
            theme,
            setTheme,
        }}>
            <ThemeProvider theme={Theme[theme]}>
                {children}
            </ThemeProvider>
        </DataContext.Provider>
    )
}

export default DataProvider;