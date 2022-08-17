import './App.css';
import Tile from './Tile/Tile';

let testArray = Array(12).fill(0);

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Lindsay K. Johnston</h1>
      </header>
      <main>
        { 
          testArray.map(element =>{
            return(<Tile/>)
          })
        }
      </main>
    </div>
  );
}

export default App;
