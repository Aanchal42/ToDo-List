import { useState } from 'react';

function TaskItem({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate || '');

  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const saveEdit = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? {
              ...t,
              name: editedName,
              priority: editedPriority,
              dueDate: editedDueDate,
            }
          : t
      )
    );
    setIsEditing(false);
  };

  const isOverdue =
    task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  return (
  <div className={`task-item ${isOverdue ? 'overdue' : ''}`}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={toggleComplete}
      className="task-checkbox"
    />

    {isEditing ? (
      <div className="task-edit-mode">
        <input
          value={editedName}
          onChange={e => setEditedName(e.target.value)}
          className="task-input"
        />
        <select
          value={editedPriority}
          onChange={e => setEditedPriority(e.target.value)}
          className="task-select"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input
          type="date"
          value={editedDueDate}
          onChange={e => setEditedDueDate(e.target.value)}
          className="task-date"
        />
        <button onClick={saveEdit} className="task-button"> Save</button>
      </div>
    ) : (
      <div className="task-display">
        <span className={`task-name ${task.completed ? 'completed' : ''}`}>
          {task.name}
        </span>
        <span className={`priority ${task.priority.toLowerCase()}`}>
           {task.priority}
        </span>
        {task.dueDate && (
          <span className="due-date">Due: {task.dueDate}</span>
        )}
        <div className="task-actions">
          <button onClick={() => setIsEditing(true)} className="task-button">
             Edit
          </button>
          <button onClick={deleteTask} className="task-button"> Delete</button>
        </div>
      </div>
    )}
  </div>
);
}

export default TaskItem;