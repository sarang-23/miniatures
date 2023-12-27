import { mockData, timeSlots } from "../utils/common";
import { useEffect } from "react";
import { Event } from "./Event";
export const Calender = () => {
  return (
    <>
      {timeSlots.map((slot, idx) => (
        <div className="time-slot">
          <span className="starts-at">{`${
            slot < 10 ? `0${slot}` : `${slot}`
          }:00`}</span>
          <div className="slot-container">
            {mockData.map((e, idx) => {
              if (
                e.startTime.split(":")[0] >= slot &&
                e.startTime.split(":")[0] < slot + 1
              ) {
                return <Event eventData={e} />;
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};
