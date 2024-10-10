import JokeBtn from "./JokeBtn";
import Meme from "./Meme";

const MemeBar = () => {
  return (
    <div className="ms-5 justify-content-center align-items-center mt-10">
      <div>
        {" "}
        <Meme />
      </div>
      <div>
        <JokeBtn />
      </div>
    </div>
  );
};

export default MemeBar;
