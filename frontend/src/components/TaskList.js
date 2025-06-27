const TaskList = ({ tasks, onComplete, onDelete }) => (
  <ul className="list-group">
    {tasks.map((task) => (
      <li
        key={task.id}
        className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded"
        style={{
          transition: 'background-color 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8f9fa')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
      >
        <div
          className="d-flex align-items-center"
          onClick={() => onComplete(task.id)}
          role="checkbox"
          aria-checked={task.completed}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onComplete(task.id);
          }}
        >
          <input
            type="checkbox"
            className="form-check-input me-3"
            checked={task.completed}
            readOnly
            aria-label={`Mark task "${task.title}" as completed`}
          />
          <div>
            <div
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
              }}
            >
              {task.title}
            </div>
            {task.description && (
              <small className="text-muted">{task.description}</small>
            )}
          </div>
        </div>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm(`Delete task "${task.title}"?`)) {
              onDelete(task.id);
            }
          }}
          aria-label={`Delete task "${task.title}"`}
        >
          &#10005;
        </button>
      </li>
    ))}
  </ul>
);

export default TaskList;
