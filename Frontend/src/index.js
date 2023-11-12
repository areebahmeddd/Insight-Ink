import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";

const container = document.getElementById("root");
const root = createRoot(container);

Modal.setAppElement("#root");
root.render(<App />);
