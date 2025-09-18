import reactLogo from './assets/react.svg';
import methodLogo from './assets/method.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div>
        <img src={methodLogo} className="logo" alt="Method logo" />
      </div>
      <h1>React+TS Code Exercise</h1>
      <div className="card">
        <p>
          Open <code>INSTRUCTIONS.md</code> in this repository for your
          requirements.
        </p>
        <p>
          This repository is a starting point for a React+TypeScript code
          exercise.
        </p>
        <p>
          When you are ready to start the exercise,{' '}
          <strong>delete all content from this component</strong> and start
          coding!
        </p>
      </div>
    </>
  );
}

export default App;
