import React from "react";
import Card from "./components/Card";
import data from "./data.json";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
