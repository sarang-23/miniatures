import { mockData, mockData2, timeSlots } from "../utils/common";
import { useEffect } from "react";
import { Event } from "./Event";
export const Calender = () => {
  return (
    <>
      {timeSlots.map((slot, idx) => (
        <div className="time-slot" key={idx}>
          <span className="starts-at">{`${
            slot < 10 ? `0${slot}` : `${slot}`
          }:00`}</span>
          <div className="slot-container">
            {mockData2.map((e, idx) => {
              if (
                e.startTime.split(":")[0] >= slot &&
                e.startTime.split(":")[0] < slot + 1
              ) {
                return (
                  <Event
                    key={idx}
                    eventData={e}
                    allEvents={mockData2}
                    index={idx}
                  />
                );
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};
