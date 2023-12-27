import React from "react";
import ListItem from "./ListItem";
import "./App.css";
import Card from "./Card";

function App() {
  const jsonData = [
    {
      id: 1,
      name: "Jake Blake",
      salarie: 85600,
      position: "Software Developer",
      bio: "Finished Oxford university, was working as a developer for 12 years",
      img: require("./assests/1.jpg"),
      exp: 13200,
    },
    {
      id: 2,
      name: "Trisha Collins",
      salarie: 75000,
      position: "UX/UI",
      bio: "Prefers to work with Adobe photoshop; loves plain CSS",
      img: require("./assests/2.jpg"),
      exp: 6500,
    },
    {
      id: 3,
      name: "Steve Stivenson",
      salarie: 105900,
      position: "Lead Engineer",
      bio: "Was working as a fitness instructor, before changed the career",
      img: require("./assests/3.jpg"),
      exp: 8100,
    },
    {
      id: 4,
      name: "Mike Michaels",
      salarie: 135000,
      position: "CEO",
      img: require("./assests/4.jpg"),
      bio: "Love to be a CEO, I pretend that know everything.",
      exp: 18500,
    },
    {
      id: 5,
      name: "Denis Young",
      salarie: 65600,
      position: "Software Developer",
      img: require("./assests/5.jpg"),
      exp: 2400,
    },
    {
      id: 6,
      name: "Chris Michaels",
      salarie: 85000,
      position: "UX/UI",
      img: require("./assests/6.jpg"),
      exp: 7800,
    },
  ];

  return (
    <div>
      <ListItem data={jsonData} />
    </div>
  );
}

export default App;
