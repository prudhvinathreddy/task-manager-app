import { useState } from "react";

const inputStyle = {
  borderRadius: 8,
  border: "1.5px solid #ced4da",
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  marginBottom: "1rem",
  boxShadow: "inset 0 1px 3px rgb(0 0 0 / 0.1)",
  outlineColor: "#0d6efd",
  width: "100%",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const buttonStyle = {
  backgroundColor: "#0d6efd",
  border: "none",
  color: "#fff",
  fontWeight: "600",
  padding: "0.75rem",
  width: "100%",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: "1.1rem",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#084298",
};

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoFocus
      />
      <textarea
        style={{ ...inputStyle, resize: "vertical", minHeight: 60 }}
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        + Add Task
      </button>
    </form>
  );
};

export default TaskForm;
