import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login";
import Chat from "./pages/chat";
import Sidebar from "./components/sidebar";
import styles from './styles/app.module.css'
import AuthorizedPage from "./pages/authorized";
import NewChat from "./pages/newChat";
import IsAuth from "./utils/useIsAuth";

function App() {

    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Sidebar/>
                <div className={styles.content}>
                    <IsAuth/>
                    <Routes>
                        <Route path="/" element={<AuthorizedPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="chat/:phone" element={<Chat/>}/>
                        <Route path="new" element={<NewChat/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
