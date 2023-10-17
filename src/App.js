import "./globalStyle.scss";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
