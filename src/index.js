//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const day = new Date(2022, 22, 12, 19);
const time = day.getHours();
console.log(time);
let greeting;

var dayColor = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  dayColor.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  dayColor.color = "green";
} else {
  greeting = "Good Evening";
  dayColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={dayColor}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
