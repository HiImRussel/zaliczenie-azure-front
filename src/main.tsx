import ReactDOM from "react-dom/client";

/** Styles */
import "./assets/styles/main.scss";

/** Config */
import "./config";

/** Components */
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
