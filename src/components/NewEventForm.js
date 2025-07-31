import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000000),
    };

    addEvent(event);
    console.log(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      <select onChange={(e) => setLocation(e.target.value)} value={location}>
        <option value="manchester">Manchester</option>
        <option value="london">London</option>
        <option value="cardiff">Cardiff</option>
      </select>
      <button>Submit</button>
      <p onClick={resetForm}>Reset Form</p>
    </form>
  );
}
