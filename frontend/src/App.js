import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, addTask, completeTask, deleteTask } from './api';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    getTasks()
      .then((res) => setTasks(res.data))
      .catch((err) => console.error('Error fetching tasks:', err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = (task) => {
    addTask(task)
      .then(fetchTasks)
      .catch((err) => console.error('Error adding task:', err));
  };

  const handleComplete = (id) => {
    completeTask(id)
      .then(fetchTasks)
      .catch((err) => console.error('Error completing task:', err));
  };

  const handleDelete = (id) => {
    deleteTask(id)
      .then(fetchTasks)
      .catch((err) => console.error('Error deleting task:', err));
  };

  return (
    <div
      className="container my-5 p-4 bg-white rounded shadow-sm"
      style={{ maxWidth: '600px' }}
    >
      <h1 className="text-center mb-4 text-primary" style={{ fontWeight: '700' }}>
        📝 Task Manager
      </h1>
      <TaskForm onAdd={handleAdd} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
      ) : (
        <p className="text-center text-secondary mt-4 fs-5">
          No tasks yet. Add a task above to get started!
        </p>
      )}
    </div>
  );
}

export default App;
