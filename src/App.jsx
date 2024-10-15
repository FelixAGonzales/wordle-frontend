import { Header } from "./Header";
import { WordlePage } from "./WordlePage";
import { Footer } from "./Footer";
import { WordleIndex} from "./WordleIndex";
// import {GameBoard} from "./GameBoard";

function App() {
  return (
    <div>
      <Header />
      {/* <GameBoard /> */}
      <WordleIndex />
      <WordlePage />
      <Footer />
    </div>
  );
}

export default App;
