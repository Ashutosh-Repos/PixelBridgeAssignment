import Game1s1 from "./Game1s1";
import Game1s2 from "./Game1s2";
import game1mode from "./assets/images/game1mode.png";
import game2mode from "./assets/images/game2mode.png";
import ar3 from "./assets/images/ar3.png";
import game1p from "./assets/images/game1p.png";
import game2p from "./assets/images/game2p.png";
import game3p from "./assets/images/game3p.png";

import game21p from "./assets/images/game21p.png";
import game22p from "./assets/images/game22p.png";
import game23p from "./assets/images/game23p.png";
import game24p from "./assets/images/game24p.png";
import { useState } from "react";
function Game1(props) {
  const [details, setDetails] = useState(false);
  let color = "#A4A8FF";
  let bgsrc;
  const game1pre = [
    { size: 12, source: game1p },
    { size: 12, source: game2p },
    { size: 12, source: game3p },
  ];
  const game2pre = [
    { size: 23, source: game21p },
    { size: 12, source: game22p },
    { size: 12, source: game23p },
    { size: 23, source: game24p },
  ];
  let gamepre;
  if (props.game == 1) {
    bgsrc = game1mode;
    color = "#A4A8FF";
    gamepre = game1pre;
  } else {
    bgsrc = game2mode;
    color = "#90FFAE";
    gamepre = game2pre;
  }
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center px-8 py-8 max-sm:py-2 max-sm:px-2">
        <img
          src={bgsrc}
          alt="#BgImage"
          className="w-full h-full object-cover fixed z-[-1]"
        />

        <div
          className="w-full h-screen flex flex-col justify-between overflow-y-srcoll"
          onWheel={(event) => {
            if (event.deltaY < 0) {
              console.log("scrolling up");
              setDetails(false);
            } else if (event.deltaY > 0) {
              console.log("scrolling down");
              setDetails(true);
            }
          }}
        >
          <div className="absolute right-5 w-8 h-72 max-sm:h-48 max-lg:right-1 top-1/2 flex flex-col items-center justify-center translate-y-[-50%] z-[2]">
            <div
              className="absolute w-7 h-7 top-0 rounded-lg flex items-center justify-center cursor-pointer"
              style={{ background: `${details ? color : "#D9D9D957"}` }}
              onClick={() => {
                setDetails(false);
              }}
            >
              <img src={ar3} />
            </div>
            <div className="absolute w-4 h-52 max-sm:h-32 bg-[#D9D9D957] rounded-full">
              <div
                className="w-4 h-1/2 rounded-full bottom-0 absolute"
                style={{
                  background: `${color}`,
                  top: `${details ? "50%" : "0"}`,
                }}
              ></div>
            </div>
            <div
              className="absolute w-7 h-7 bottom-0 rounded-lg bg-[#D9D9D957] flex items-center justify-center cursor-pointer"
              style={{ background: `${details ? "#D9D9D957" : color}` }}
              onClick={() => {
                setDetails(true);
              }}
            >
              <img src={ar3} className="rotate-[180deg]" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1
              className="text-7xl text-white text-bold max-sm:text-6xl"
              style={{ fontFamily: "Baron Kuffner" }}
            >
              ALABAY GUARDIAN
            </h1>
            <h2
              className="text-6xl text-white max-sm:text-4xl"
              style={{ fontFamily: "Bebas Neue", color: `${color}` }}
            >
              SHEPHERD OF THE STEPPES
            </h2>
          </div>
          {details ? (
            <Game1s2
              theme={color}
              handleGame={props.handleGame}
              handleMode={props.handleMode}
            />
          ) : (
            <Game1s1 gamepre={gamepre} theme={color} />
          )}
        </div>
      </div>
    </>
  );
}
export default Game1;
