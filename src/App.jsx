import "./App.css";
import Background from "./components/Background/Background";
import Foreground from "./components/Foreground/Foreground";

function App() {
  return (
    <>
      <div className=" relative w-full h-screen bg-zinc-800">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
