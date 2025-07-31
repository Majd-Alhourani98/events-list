import React from "react";

// styles
import styles from "./EventList.module.css";

export default function EventtList({ events, handleClick }) {
  return events.map((event) => (
    <div className={styles.card} key={event.id}>
      <h2>{event.title}</h2>
      <button onClick={() => handleClick(event.id)}>Delete Event</button>
      <p>{event.location}</p>
    </div>
  ));
}
