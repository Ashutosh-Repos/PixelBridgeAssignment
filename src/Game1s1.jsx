import play from "./assets/images/play.png";
function Game1s1(props) {
  const pre = props.gamepre;
  const color = props.theme;
  return (
    <>
      <p className="text-lg text-white max-w-[35rem] w-full py-8 pr-8 max-sm:py-4 max-sm:text-base">
        Take on the role of the legendary Alabay on a quest to uncover the
        ancient secrets of its ancestors.
      </p>
      <span
        className="w-52 min-h-12 rounded-full flex items-center"
        style={{ background: `${color}` }}
      >
        <img src={play} alt="" className="w-8 ml-4" />
        <p
          className="text-lg text-white ml-2"
          style={{
            fontFamily: "helvetica",
            color: "#201E26",
            fontWeight: "500",
          }}
        >
          COMING SOON
        </p>
      </span>

      <div className="w-full h-[18rem] relative mt-2 flex flex-col">
        <div className="w-full flex px-8 max-sm:px-4 py-2">
          <h1
            className="text-xl font-bold font-['Montserrat'] max-sm:text-base "
            style={{ color: `${color}` }}
          >
            GAME
          </h1>
          <h1 className="text-xl font-bold text-white font-['Montserrat'] max-sm:text-base">
            &nbsp;PREVIEW
          </h1>
        </div>
        <div className="w-full h-[12rem] rounded z-[1] relative flex items-center mt-4 justify-center bg-transparent max-sm:pl-2 pl-8">
          <div className="h-full grow relative flex items-center overflow-x-scroll overflow-y-hidden gap-12">
            {pre.map((e, index) => (
              <div
                className="h-full aspect-square rounded-3xl bg-white px-[1px] py-[1px]"
                style={{
                  minWidth: `${e.size}rem`,
                }}
                key={index}
              >
                <img src={e.source} alt="" className="h-full rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Game1s1;
