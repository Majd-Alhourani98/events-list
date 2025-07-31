import React, { useState } from "react";

// Components
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventtList from "./components/EventtList";
import NewEventForm from "./components/NewEventForm";

// Styles
import "./App.css";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([
    { title: "Majd's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: "Race on Moo Moo Farm", id: 3 },
  ]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClick = (id) => {
    setEvents((preEvents) => {
      return preEvents.filter((preEvent) => {
        return preEvent.id !== id;
      });
    });
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    handleClose();
  };

  const subtitle = "All the latest events in Lebanon";
  return (
    <div className="App">
      {/* MODAL */}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      {/* TITLE */}
      <Title title="Majd Alhourani events" subtitle={subtitle} />

      {/* BUTTONS */}
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

      {/* EVENT LIST */}
      {showEvents && <EventtList events={events} handleClick={handleClick} />}

      {/* Modal button */}
      <button onClick={handleOpen}>Add New Event</button>
    </div>
  );
}

export default App;
