import logo from "./flutter.svg";
import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React Anjayy</h1>
        <p>Hello World</p>
        <Button className="button-style" name="klik me" />
      </header>
    </div>
  );
}

export default App;
