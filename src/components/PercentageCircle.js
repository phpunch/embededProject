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
  let percentage = Math.round(props.percentage * 10000) / 100;
  if (props.name === "Dust Density") {
    percentage = Math.round(props.percentage * 100) / 0.75;
  } else if (props.name === "Temperature") {
    percentage = props.percentage * 100 / 50
  }
  let style = {};
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
        fill: "#f88"
        // Tweak text size:
      }
    };
  }
  let circularProgressbar = (
    <CircularProgressbar
      percentage={percentage}
      text={`${percentage}`}
      styles={style}
    />
  );
  if (props.name === "Humidity") {
    circularProgressbar = (
      <CircularProgressbar
        percentage={percentage}
        text={`${percentage}%`}
        styles={style}
      />
    );
  } else if (props.name === "Temperature") {
    circularProgressbar = (
      <CircularProgressbar
        percentage={percentage}
        text={`${Math.round(props.percentage)}`}
        styles={style}
      />
    );
  }
  return (
    <div>
      <Label>{props.name}</Label>
      <div style={{ width: "100px" }}>{circularProgressbar}</div>
    </div>
  );
};

export default percentageCircle;
