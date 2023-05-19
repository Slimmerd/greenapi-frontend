import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login";
import Chat from "./pages/chat";
import Sidebar from "./components/sidebar";
import styles from './styles/app.module.css'
import AuthorizedPage from "./pages/authorized";
import NewChat from "./pages/newChat";

function App() {
    return (
        <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.content}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AuthorizedPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="chat/*" element={<Chat />} />
                        <Route path="new" element={<NewChat />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
