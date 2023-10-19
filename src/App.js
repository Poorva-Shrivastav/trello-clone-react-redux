import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Body from "./component/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
