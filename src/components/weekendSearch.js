import React from "react";
import EventItem from "./eventItem";

const WeekendSearch = props => {
  let saturdayItems = props.satEvents.map(event => {
    return <EventItem key={event.capacity} event={event} />;
  });

  return (
    <div className="event-container">
      <ul className="event-list">{saturdayItems}</ul>
    </div>
  );
};

export default WeekendSearch;
