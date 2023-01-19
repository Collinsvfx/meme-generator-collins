import Header from "./components/Header";
import Meme from "./components/Meme";
// import memesData from "./memesData";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}
