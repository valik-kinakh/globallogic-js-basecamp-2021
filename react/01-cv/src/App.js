import './App.css'
import Left from "./components/Left/Left";
import Content from "./components/Content/Content";

function App() {
  return (
      <div className={"main"}>
        <div className={"left"}>
         <Left />
        </div>
        <div className={"content"} >
         <Content />
        </div>
      </div>
  );
}

export default App;
