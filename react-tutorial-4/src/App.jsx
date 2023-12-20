import Player from './components/Player.jsx';
import TimerGame from "./components/TimerChallenge.jsx";
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import "./index.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerGame title="Easy" targetTime={1} />
          <TimerGame title="Not Easy" targetTime={5} />
          <TimerGame title="Hard" targetTime={10} />
          <TimerGame title="Very Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
