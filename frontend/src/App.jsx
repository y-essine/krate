import MyComp from "@/components/MyComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import ProfilePage from "./pages/main/Profile";
import SettingsPage from "./pages/main/Settings";
import WorkspacePage from "./pages/main/[workspace]/Workspace";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />}>
                    <Route path="" element={<MyComp />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="workspace/:slug" element={<WorkspacePage />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<h1>Register</h1>} />

                <Route
                    path="*"
                    element={
                        <div className="px-8 py-5">
                            <h1>Not found.</h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
