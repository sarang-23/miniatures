import { useEffect, useState } from "react";

export const Event = ({ eventData }) => {
  const { startTime, endTime, color, title } = eventData;
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(0);

  const convertArrToNum = (arr) => {
    return arr.map((a) => parseInt(a));
  };

  useEffect(() => {
    setHeight(calculateHeight());
  }, []);

  const calculateHeight = () => {
    const [startHr, startMin] = convertArrToNum(startTime.split(":"));
    setTop(startMin);
    const [endHr, endMin] = convertArrToNum(endTime.split(":"));
    let durationInMinutes = 0;
    if (startHr == endHr) {
      durationInMinutes = Math.abs(endMin - startMin);
    } else {
      durationInMinutes = 60 - startMin + (endHr - startHr - 1) * 60 + endMin;
    }
    return durationInMinutes;
  };
  return (
    <div
      style={{
        top: `${top}px`,
        height: `${height}px`,
        width: "100%",
        backgroundColor: color,
        position: "absolute",
        zIndex: 5,
        border: "0.5px solid white",
        borderRadius: "4px",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span className="event-title">{title}</span>
      <span className="event-title">
        {startTime} - {endTime}
      </span>
    </div>
  );
};
