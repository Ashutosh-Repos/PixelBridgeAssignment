import { useState } from "react";
import arrw1 from "../assets/images/arrow1.png";
import Slider from "./Slider";
import ph from "../assets/images/pht.png";
import vi from "../assets/images/vid.png";
function Component4() {
  const [type, setType] = useState(0);

  const photo = [
    { source: ph },
    { source: ph },
    { source: ph },
    { source: ph },
    { source: ph },
  ];
  const video = [
    { source: vi },
    { source: vi },
    { source: vi },
    { source: vi },
    { source: vi },
  ];
  const all = [
    { source: ph },
    { source: vi },
    { source: ph },
    { source: vi },
    { source: ph },
    { source: vi },
    { source: ph },
    { source: vi },
    { source: ph },
    { source: vi },
  ];
  return (
    <>
      <ul className="w-full h-12 flex items-center justify-center list-none gap-2 text-lg z-[1] font-['Montserrat'] font-bold">
        <li
          onClick={() => {
            setType(0);
          }}
          className="cursor-pointer"
          style={{ color: `${type == 0 ? "#FFA800" : "#000000"}` }}
        >
          ALL
        </li>
        <li
          onClick={() => {
            setType(1);
          }}
          className="cursor-pointer"
          style={{ color: `${type == 1 ? "#FFA800" : "#000000"}` }}
        >
          Photos
        </li>
        <li
          onClick={() => {
            setType(2);
          }}
          className="cursor-pointer"
          style={{ color: `${type == 2 ? "#FFA800" : "#000000"}` }}
        >
          VIDEOS
        </li>
      </ul>
      {type == 0 ? (
        <Slider wide="24rem" dat={photo} />
      ) : type == 1 ? (
        <Slider wide="24rem" dat={photo} />
      ) : (
        <Slider wide="24rem" dat={video} />
      )}
    </>
  );
}
export default Component4;
