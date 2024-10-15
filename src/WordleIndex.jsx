export function WordleIndex() {
  return (
    <div>
      <h1>Welcome to wordle!</h1>
      <div id="keyboard">
        <div className="keyboard-row">
          <button className="key">Q</button>
          <button className="key">W</button>
          <button className="key">E</button>
          <button className="key">R</button>
          <button className="key">T</button>
          <button className="key">Y</button>
          <button className="key">U</button>
          <button className="key">I</button>
          <button className="key">O</button>
          <button className="key">P</button>
        </div>
        <div className="keyboard-row">
          <button className="key">A</button>
          <button className="key">S</button>
          <button className="key">D</button>
          <button className="key">F</button>
          <button className="key">G</button>
          <button className="key">H</button>
          <button className="key">J</button>
          <button className="key">K</button>
          <button className="key">L</button>
        </div>
        <div className="keyboard-row">
          <button className="key">Z</button>
          <button className="key">X</button>
          <button className="key">C</button>
          <button className="key">V</button>
          <button className="key">B</button>
          <button className="key">N</button>
          <button className="key">M</button>
        </div>
      </div>
    </div>
  );
}