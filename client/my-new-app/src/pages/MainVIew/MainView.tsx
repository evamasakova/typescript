import "./MainView.css";
import { Link } from "react-router-dom";

export default function MainView() {
  return (
    <>
      <h1>Main view</h1>
      <Link to={"/carlist"}>
        <p>Go to car list</p>
      </Link>

      <p className="mainview-p">Hello Biiiiiitch</p>
      <div>Yoho</div>
    </>
  );
}
