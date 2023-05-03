import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@pages/Home/Index";
import "./styles.css";

const root = createRoot(document.getElementById("app"));
root.render(<Home />);
