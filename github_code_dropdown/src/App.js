import github_logo from '../src/logos/github_logo.svg'
import './App.css';
import CodeDropdown from './components/code_dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={github_logo} alt="logo" />
      </header>
      <section>
        <CodeDropdown/>
      </section>
      <footer>
        <img src={github_logo} alt="logo" />
      </footer>
    </div>
  );
}

export default App;
