import React from "react";

// Import module and default styles
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Label(props) {
  let margin_left = 12
  if (props.children === 'Humidity') {

    margin_left = 20
  }
  return <div style={{ marginTop: 70, marginBottom: 5, marginLeft: margin_left }}>{props.children}</div>;
}

const percentageCircle = props => {
  const percentage = Math.round(props.percentage * 10000) / 100
  return (
    <div>
      <Label>{props.name}</Label>
      <div style={{ width: "100px" }}>
        <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
};

export default percentageCircle;
