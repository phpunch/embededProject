import React from "react";

// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Label(props) {
  let margin_left = 12;
  if (props.children === "Humidity") {
    margin_left = 20;
  }
  return (
    <div style={{ marginTop: 15, marginBottom: 5, marginLeft: margin_left }}>
      {props.children}
    </div>
  );
}

const percentageCircle = props => {
  const percentage = Math.round(props.percentage * 10000) / 100;
  let style = {}
  if (props.percentage > props.threshold) {
    style = {
      // Customize the path, i.e. the part that's "complete"
      path: {
        // Tweak path color:
        stroke: "#ff3333",
        // Tweak transition animation:
        transition: "stroke-dashoffset 0.5s ease 0s"
      },
      // Customize the text
      text: {
        // Tweak text color:
        fill: "#f88",
        // Tweak text size:
      }
    }
  }
  return (
    <div>
      <Label>{props.name}</Label>
      <div style={{ width: "100px" }}>
        <CircularProgressbar
          percentage={percentage}
          text={`${percentage}%`}
          styles={style}
        />
      </div>
    </div>
  );
};

export default percentageCircle;
