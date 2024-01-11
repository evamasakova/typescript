import { Link } from "react-router-dom";
import { CarLink } from "./CarLink";

export default function CarList() {
  return (
    <>
      <h2>Car List</h2>
      <CarLink carId="42515135" carName="Octavia" />
      <Link to={"/"}>Go back</Link>
    </>
  );
}

