import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PokemonProvider from "./context/PokemonContext.tsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <PokemonProvider>
        <App />
    </PokemonProvider>
);

{
    /* <React.StrictMode>
    </React.StrictMode> */
}
