import React from "react";
import { Toaster } from "react-hot-toast";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import "./style/GlobalStyle.css";
import AppContent from "./components/AppContent";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app-wrapper">
          <PageTitle>To Do List</PageTitle>
          <AppHeader></AppHeader>
          <div className="content-wrapper">
            <AppContent></AppContent>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
}
export default App;
