import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

   const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <h1> To-Do List </h1>

      <SearchBar setSearchTerm={setSearchTerm} />

      <TaskForm setTasks={setTasks} />

  {filteredTasks.length > 0 ? (
    filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
     ))
    ) : (
     <p className="no-task-message">❌ Task not found in your list.............</p>
 )}

    </div>
  );
}

export default App;