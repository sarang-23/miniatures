import { useEffect, useState } from "react";

export const Event = ({ eventData, allEvents, index }) => {
  const { startTime, endTime, color, title } = eventData;
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(0);

  const convertArrToNum = (arr) => {
    return arr.map((a) => parseInt(a));
  };

  useEffect(() => {
    let numOverlapping = 1;
    for (let i = 0; i < index; i++) {
      if (isOverlapping(allEvents[i])) {
        numOverlapping++;
      }
    }
    setWidth((1 / numOverlapping) * 100);
    setLeft(340 * (1 - 1 / numOverlapping));
    setHeight(calculateHeight());
  }, []);

  const isOverlapping = (eventDetails) => {
    const [currStartHr, currStartMin] = eventData.startTime.split(":");
    const [currEndHr, currEndMin] = eventData.endTime.split(":");
    const [eventStartHr, eventStartMin] = eventDetails.startTime.split(":");
    const [eventEndHr, eventEndMin] = eventDetails.endTime.split(":");
    const currEventStart24Hrs = parseInt(
      currStartHr.toString() + currStartMin.toString()
    );
    const currEventEnd24Hrs = parseInt(
      currEndHr.toString() + currEndMin.toString()
    );
    const eventStart24Hrs = parseInt(
      eventStartHr.toString() + eventStartMin.toString()
    );
    const eventEnd24Hrs = parseInt(
      eventEndHr.toString() + eventEndMin.toString()
    );

    if (
      (eventStart24Hrs >= currEventStart24Hrs &&
        eventStart24Hrs < currEventEnd24Hrs) ||
      (eventEnd24Hrs > currEventStart24Hrs &&
        eventEnd24Hrs <= currEventEnd24Hrs)
    ) {
      return true;
    }
  };

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
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}%`,
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
