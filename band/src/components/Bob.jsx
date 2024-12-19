import bob from "../assets/Bob_Marley_1976_press_photo.jpg";

function Bob() {
  return (
    <div className="bob">
      <img key="bob" src={bob} alt={bob} height={500}></img>
    </div>
  );
}

export default Bob;
