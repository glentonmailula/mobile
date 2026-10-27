import ReactDOM from "react-dom/client";
import MobileApp from "./MobileApp";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container was not found");
}

const root = ReactDOM.createRoot(container);
root.render(<MobileApp />);