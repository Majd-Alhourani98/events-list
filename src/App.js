import { useState } from "react";

import "./App.css";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "Majd's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: "Race on Moo Moo Farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((preEvent) => {
        return preEvent.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <div>
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        )}
      </div>

      <div>
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        )}
      </div>

      {showEvents &&
        events.map((event) => (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleClick(event.id)}>Delete Event</button>
          </div>
        ))}
    </div>
  );
}

export default App;
