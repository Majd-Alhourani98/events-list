import { useState } from "react";

import "./App.css";

function App() {
  const [events, setEvents] = useState([
    { title: "Majd's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: "Race on Moo Moo Farm", id: 3 },
  ]);

  return (
    <div className="App">
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
