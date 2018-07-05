import React from "react";

const EventItem = ({ event }) => {
  const eventHeading = event.name.text;
  const imageURL = () =>
    event.logo === null
      ? "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F36765842%2F213312316570%2F1%2Foriginal.jpg?h=200&w=450&rect=3%2C0%2C854%2C427&s=12a5e863102b0cc583ed7fe3a7bfab52"
      : event.logo.url;

  const image = imageURL();

  const address = event.venue.address.address_1;

  return (
    <li className="event-item">
      <div>
        <div>
          <a href={event.url} target="_blank">
            <img
              className="event-image"
              src={image}
              href={event.url}
              alt="event "
            />
          </a>
        </div>

        <div>
          <div>{eventHeading}</div>
          <p className="small-event-text">{address}</p>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
