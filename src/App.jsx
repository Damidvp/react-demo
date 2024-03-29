import "./App.css";
import Smiley from "./components/Smiley";
import { smileys } from "./models";

function App() {
  return (
    <div className="app">
      <h2>Quel est ton mood actuel ?</h2>
      <div className="smileys-box">
        {smileys.map((smiley) => (
          <Smiley key={smiley.id} smiley={smiley} />
        ))}
      </div>
    </div>
  );
}

export default App;
