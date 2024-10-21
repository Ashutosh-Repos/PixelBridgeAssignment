import Component4 from "./Component4";
import Top from "./Top";
import Component2 from "./Component2";
import Component3N from "./Component3N";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Component7 from "./Component7";
import Component8 from "./Component8";
import Component9 from "./Component9";
function Content(props) {
  return (
    <>
      <div className="w-full h-full rounded-t-[2rem] overflow-y-scroll overflow-x-hidden relative flex flex-col bg-white">
        <Top />
        <Component4 />
        <Component2 />
        <Component3N />
        <Component5 />
        <Component6 />
        <Component7
          handleGame={props.handleGame}
          handleMode={props.handleMode}
        />
        <Component8 />
        <Component9 />
      </div>
    </>
  );
}
export default Content;
