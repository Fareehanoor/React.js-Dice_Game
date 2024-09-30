import { useState } from "react";
import Home from "./Components/Home";
import PlayGame from "./Components/PlayGame";

function App() {
  const [isGameStarted , setIsGameStarted] = useState(false);

  function togglePlayButton(){
    setIsGameStarted(prev => !prev);
  }
  return (
    <>
    {isGameStarted ? <PlayGame /> : <Home toggle={togglePlayButton}/>}
    </>
  );
}

export default App;
