import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import "./index.less";

const clientId =
    "884802732487-t1vvtccfefd28qlac7887k8kogctetp9.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={clientId}>
        <StrictMode>
            <App />
        </StrictMode>
    </GoogleOAuthProvider>
);
