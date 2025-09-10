import { useState } from 'react';

function TaskForm({ setTasks }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

   // Add task
  const handleAdd = () => {
    if (!name.trim()) return;
    const newTask = {
      id: Date.now(),
      name,
      priority,
      completed: false,
      dueDate,
    };
    setTasks(prev => [...prev, newTask]);
    setName('');
    setPriority('Medium');
    setDueDate('');
  };

  return (
    <div className="form-row">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Task name" 
      className="task-name-input"
    />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskForm;