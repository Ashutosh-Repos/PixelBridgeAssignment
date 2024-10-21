import arrw1 from "../assets/images/arrow1.png";
import { useRef } from "react";
function Slider(props) {
  const ref = useRef();
  const scroller = useRef();
  const scrollerdiv = useRef();
  const data = props.dat;
  function pop() {
    ref.current.style.transform = "scale(0.85)";
    setTimeout(() => {
      ref.current.style.transform = "scale(1)";
    }, 100);
  }
  const rightMove = () => {
    let sc = scroller.current.scrollLeft;
    scroller.current.scrollLeft = scroller.current.scrollLeft + 400;
    console.log(scroller.current.scrollLeft);
    if (scroller.current.scrollLeft == sc) {
      scroller.current.scrollLeft = 0;
    }
  };
  return (
    <div
      className="w-full h-80 rounded z-[2] relative flex items-center justify-center py-2 bg-transparent px-10 max-sm:px-2"
      ref={scrollerdiv}
    >
      <div
        className="h-full grow relative flex items-center overflow-x-scroll overflow-y-hidden gap-12"
        ref={scroller}
        id="sr"
      >
        {data.map((e, index) => (
          <div
            className="h-72 rounded-xl relative drop-shadow-[2px_3px_5px_rgba(0,0,0,0.185)] my-4 bg-slate-300 flex items-center justify-center overflow-hidden"
            style={{ minWidth: `${props.wide}` }}
            key={index}
          >
            <img src={e.source} />
          </div>
        ))}
      </div>
      <img
        src={arrw1}
        className="w-14 absolute right-16"
        ref={ref}
        onClick={() => {
          pop();
          rightMove();
        }}
      />
    </div>
  );
}
export default Slider;
