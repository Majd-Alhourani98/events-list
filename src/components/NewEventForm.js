import "./NewEventForm.css";

export default function NewEventForm() {
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input type="title" />
      </label>

      <label>
        <span>Event Date:</span>
        <input type="date" />
      </label>
    </form>
  );
}
