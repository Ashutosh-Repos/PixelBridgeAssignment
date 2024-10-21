import Slider from "./Slider";
import game1p from "../assets/images/game1p.png";
import game2p from "../assets/images/game2p.png";
import game3p from "../assets/images/game3p.png";
import game22p from "../assets/images/game22p.png";
import game23p from "../assets/images/game23p.png";
function Component8() {
  const data = [
    { source: game23p },
    { source: game22p },
    { source: game1p },
    { source: game2p },
    { source: game3p },
  ];
  return (
    <div className="w-full min-h-[35rem] relative">
      <div className="w-full flex px-8 max-sm:px-4 py-4">
        <h1 className="text-4xl font-extrabold text-[#FFA800] font-['Montserrat'] max-sm:text-3xl ">
          GAME
        </h1>
        <h1 className="text-4xl max-sm:text-3xl font-extrabold font-['Montserrat']">
          &nbsp;PREVIEW
        </h1>
      </div>
      <Slider wide="18rem" dat={data} />
    </div>
  );
}
export default Component8;
