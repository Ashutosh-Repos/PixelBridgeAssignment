import arrw1 from "../assets/images/arrow1.png";
import { useRef } from "react";
function Slider(props) {
  const ref = useRef();
  const data = props.dat;
  function pop() {
    ref.current.style.transform = "scale(0.85)";
    setTimeout(() => {
      ref.current.style.transform = "scale(1)";
    }, 100);
  }
  return (
    <div className="w-full h-80 rounded z-[2] relative flex items-center justify-center py-2 bg-transparent px-10 max-sm:px-2">
      <div className="h-full grow relative flex items-center overflow-x-scroll overflow-y-hidden gap-12">
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
        }}
      />
    </div>
  );
}
export default Slider;
