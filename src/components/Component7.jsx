import game1 from "../assets/images/game1.png";
import game2 from "../assets/images/game2.png";
import arrw1 from "../assets/images/arrow1.png";
import { useEffect, useState, useRef } from "react";
function Component7(props) {
  function handle(a, b) {
    props.handleMode(a);
    props.handleGame(b);
  }

  const gmr = [{}, {}, {}];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function pop() {
    let x = document.getElementById("arwg");
    x.style.transform = "scale(0.85)";
    setTimeout(() => {
      x.style.transform = "scale(1)";
    }, 100);
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === gmr.length - 1 ? 0 : prevIndex + 1
        ),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleMouseEnter = () => {
    resetTimeout(); // Clear the timeout to stop sliding
  };

  // Resume slideshow when not hovering
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === gmr.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );
  };

  return (
    <div className="w-full min-h-[50rem] max-md:min-h-[40rem] max-sm:min-h-[30rem] max-[400px]:min-h-[28rem] relative bg-gradient-radial from-lyellow via-dyellow to-dyellow overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full relative mt-16 max-sm:mt-8">
        <h1 className="font-['cheeseburga'] font-bold text-8xl text-white text-center max-md:text-7xl max-sm:text-6xl">
          Games
        </h1>
        <p className="text-center font-['Montserrat'] font-bold mt-4 text-4xl max-md:text-3xl max-sm:text-2xl">
          Stay tuned for upcoming games !
        </p>
      </div>

      <div className="w-full h-[25rem] max-[840px]:h-[23rem] max-[700px]:h-[17rem] max-[515px]:h-[14rem] max-[426px]:h-[11rem] flex overflow-hidden items-center justify-center overflow-hidden relative ">
        <img
          src={arrw1}
          className="w-14 absolute right-16 z-[2] transition-all"
          id="arwg"
          onClick={() => {
            if (index < 2) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
            pop();
          }}
        />
        <div
          className="absolute w-32 h-10 rounded-full z-10 bottom-[25px] max-sm:w-16 max-sm:h-5 flex items-center justify-center"
          style={{
            background: `${
              index == 0 ? "#A4A8FFFF" : index == 1 ? "#90FFAEFF" : "#A4A8FFFF"
            }`,
          }}
          onClick={() => {
            index == 0
              ? handle(true, 1)
              : index == 1
              ? handle(true, 2)
              : handle(true, 1);
          }}
        >
          <p className="text-center text-white max-sm:text-[8px] font-['Montserrat'] font-bold">
            Discover
          </p>
        </div>
        <div
          className="w-[45rem] absolute h-[25rem] max-[840px]:w-[40rem] max-[840px]:h-[23rem] max-[700px]:w-[30rem] max-[700px]:h-[17rem] max-[515px]:w-[25rem] max-[515px]:h-[14rem] max-[426px]:w-[20rem] max-[426px]:h-[11rem] mt-16 max-sm:mt-8 px-2 py-2 max-sm:px-1 max-sm:py-1 bg-white rounded-3xl z-[1] overflow-hidden "
          style={{
            transform: `translate3d(${(0 - index) * 200}%, 0, 0)`,
            transition: "all 1s ease-in-out",
          }}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
        >
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <img src={game1} />
          </div>
        </div>
        <div
          className="w-[45rem] absolute h-[25rem] max-[840px]:w-[40rem] max-[840px]:h-[23rem] max-[700px]:w-[30rem] max-[700px]:h-[17rem] max-[515px]:w-[25rem] max-[515px]:h-[14rem] max-[426px]:w-[20rem] max-[426px]:h-[11rem] mt-16 max-sm:mt-8 px-2 py-2 max-sm:px-1 max-sm:py-1 bg-white rounded-3xl z-[1] overflow-hidden "
          style={{
            transform: `translate3d(${(1 - index) * 200}%, 0, 0)`,
            transition: "all 1s ease-in-out",
          }}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
        >
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <img src={game2} />
          </div>
        </div>
        <div
          className="w-[45rem] absolute h-[25rem] max-[840px]:w-[40rem] max-[840px]:h-[23rem] max-[700px]:w-[30rem] max-[700px]:h-[17rem] max-[515px]:w-[25rem] max-[515px]:h-[14rem] max-[426px]:w-[20rem] max-[426px]:h-[11rem] mt-16 max-sm:mt-8 px-2 py-2 max-sm:px-1 max-sm:py-1 bg-white rounded-3xl z-[1] overflow-hidden "
          style={{
            transform: `translate3d(${(2 - index) * 200}%, 0, 0)`,
            transition: "all 1s ease-in-out",
          }}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
        >
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <img src={game1} className="rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="w-[120%] aspect-square bg-white absolute top-[70%] z-[0]"></div>
    </div>
  );
}
export default Component7;
