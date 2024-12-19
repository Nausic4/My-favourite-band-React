import peter from "../assets/petertosh.jpg";

function Peter() {
  return (
    <div className="peter">
      <img key="peter" src={peter} alt={peter} height={500}></img>
    </div>
  );
}

export default Peter;
