function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle">
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;