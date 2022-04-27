import logo from "./flutter.svg";
import "./App.css";
import Button from "./Components/Button";
import ButtonDown from "./Components/ButtonDown";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React Anjayy</h1>
        <p>Hello World</p>
        <div>
          <Button color="#7735C3" active={false} >asd</Button>
          <ButtonDown />
          <List>asdasdas<br/> asdasdjasd</List>
        </div>
      </header>
    </div>
  );
}

export default App;
