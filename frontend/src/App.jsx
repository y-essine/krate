import MyComp from "@/components/MyComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />}>
                    <Route path="" element={<MyComp />} />
                </Route>
                <Route path="login" element={<h1>Login</h1>} />
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
