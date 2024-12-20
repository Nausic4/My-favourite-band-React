import band from "../assets/theWailers.png";

function Band() {
  return (
    <div className="band">
      <img
        className="exclude"
        key="band"
        src={band}
        alt={band}
        height={500}
      ></img>
    </div>
  );
}

export default Band;
