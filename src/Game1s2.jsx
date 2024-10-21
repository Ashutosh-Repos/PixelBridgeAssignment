import play from "./assets/images/play.png";
function Game1s2(props) {
  const color = props.theme;
  function handle(a, b) {
    props.handleMode(a);
    props.handleGame(b);
  }
  return (
    <>
      <div className="flex flex-col">
        <h1
          className="font-['Montserrat'] font-bold text-2xl max-sm:text-xl"
          style={{ color: `${color}` }}
        >
          FEATURES
        </h1>
        <p className="max-w-[70rem] font-['Montserrat'] font-bold text-base max-sm:text-xs max-sm:w-[calc(100%-1rem)] max-sm:font-medium text-white">
          <br />
          Explore a variety of landscapes, including
          <span style={{ color: `${color}` }}>&nbsp;mountains </span>,
          <span style={{ color: `${color}` }}>&nbsp;forests</span>,
          <span style={{ color: `${color}` }}>&nbsp;deserts</span>
          ,&nbsp;and <span style={{ color: `${color}` }}>ancient ruins</span>
          .
          <br />
          <br />
          Use the Alabay's <span style={{ color: `${color}` }}></span>
          abilities to solve <span style={{ color: `${color}` }}></span>
          puzzles that involve moving objects, activating mechanisms, or finding
          hidden clues.
          <br />
          <br />
          Discover relics that tell the story of the Alabay’s ancestors, each
          piece contributing to a larger narrative about the breed's role in
          ancient history.
          <br />
          <br />
          Unlock new skills and abilities for the Alabay, enhancing its capacity
          to explore and solve puzzles.
          <br />
          <br />
          Challenge Modes:
          <li>
            <span style={{ color: `${color}` }}>Time Trials</span>: Compete in
            special timed challenges where the Alabai must navigate through
            complex mazes or complete puzzles within a time limit.
          </li>
          <li>
            <span style={{ color: `${color}` }}>Exploration Mastery</span>: A
            mode that rewards players for fully exploring every nook and cranny
            of the game’s world, uncovering all secrets
          </li>
        </p>
      </div>
      <div className="flex gap-[2rem] mb-8 w-full">
        <span className="w-52 min-h-12 rounded-full bg-[#FFFFFF] flex items-center">
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
        <span
          className="w-40 min-h-12 rounded-full border-[3px] flex items-center justify-center"
          onClick={() => {
            handle(false, 1);
          }}
        >
          <p
            className="text-lg text-white"
            style={{
              fontFamily: "helvetica",
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            EXIT
          </p>
        </span>
      </div>
    </>
  );
}
export default Game1s2;
