import React from "react";
import SeatList from "./SeatList";
import Ticket from "./Ticket";
import data from "./data.json";
export default function MovieTicket() {
  return (
    <div className="container">
      <h1 className="text-center fs-1 text-bg-success p-4 fw-bolder">
        ĐẶT VÉ XEM PHIM
      </h1>
      <div className={`row `}>
        <div className="col-md-8">
          <SeatList seats={data} />
        </div>
        <div className="col-md-4">
          <Ticket />
        </div>
      </div>
    </div>
  );
}