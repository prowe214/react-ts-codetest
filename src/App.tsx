import './App.css';
import { Instructions } from './components/Instructions';
import { MemoryGame } from './components/MemoryGame';

const App = () => {
  return (
    <div className="app">
      <h1>🧠 Memory Game Challenge</h1>
      <Instructions />
      <MemoryGame />
    </div>
  );
};

export default App;
