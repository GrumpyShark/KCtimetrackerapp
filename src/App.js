import "./App.css";
import React from "react";
import HomePage from "./components/HomePage";
import TodayPage from "./components/TodayPage";

function App() {
  const route = window.location.pathname;
  if (route === "/today") return <TodayPage />;
  return <HomePage />;
}

export default App;
