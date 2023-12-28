import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/layout/Header.tsx";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/layout/Footer.tsx";
import { AuthContextProvider } from "./context/auth/auth.context.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <App />

        {/* <Footer /> */}
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
