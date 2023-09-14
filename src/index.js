import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
//import "./assets/i18n/i18n";
import "./assets/css/common.css";
import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
