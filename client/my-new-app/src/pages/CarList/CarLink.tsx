import { Link } from "react-router-dom";
import "./CarLink.css"


export function CarLink(props: CarLinkType) {
  return (
    <div className="carlink-wrapper">
    
      <p className="carlink-name">{props.carName}</p>
      <Link to={`/car/${props.carId}`}>
        <p className="carlink-view">View car</p>
      </Link>
     
    </div>
  );
}

type CarLinkType = {
    carId: string;
    carName: string;
}
