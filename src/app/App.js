import React, { StrictMode } from "react";
import classNames from "classnames";
import MainPage from "../pages/MainPage/MainPage";
import "./styles/App.scss"
import { DarkModeContext, DarkModeContextProvider } from "./context/DarkModeContext";


function App (){
    const [page, setPage] = React.useState({currentPage: MainPage});
    return (
        <StrictMode>
            <DarkModeContextProvider>
                <div className={classNames("app-container")}>
                    <page.currentPage />
                </div>
            </DarkModeContextProvider>
        </StrictMode>
    )
}
export {App}