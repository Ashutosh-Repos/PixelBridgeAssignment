import { useState } from "react";
import "./App.css";
import homebg from "./assets/images/homepic.jpg";
import Home from "./components/Home";
import ContentN from "./components/ContentN";
import GameM1 from "./Game1";
function App() {
  const [gamemode, setGamemode] = useState(false);
  const [gamenum, setGamenum] = useState(1);

  const handleMode = (e) => {
    setGamemode(e);
  };
  const handleGame = (e) => {
    setGamenum(e);
  };

  return gamemode ? (
    <>
      <GameM1 game={gamenum} handleGame={handleGame} handleMode={handleMode} />
    </>
  ) : (
    <>
      <img
        src={homebg}
        alt="#BgImage"
        className="w-full h-full object-cover fixed z-[-1]"
      />
      <Home />
      <div className="w-full min-h-[calc(100vh-4rem)] px-12 max-lg:px-8 max-md:px-4 max-sm:px-1 overflow-hidden  ">
        <ContentN handleGame={handleGame} handleMode={handleMode} />
      </div>
    </>
  );
}

export default App;
