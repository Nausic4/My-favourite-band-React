import bunny from "../assets/Bunnywailer.png";

function Bunny() {
  return (
    <div className="bunny">
      <img key="bunny" src={bunny} alt={bunny} height={500}></img>
    </div>
  );
}

export default Bunny;
