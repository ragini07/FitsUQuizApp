import NotFoundImg from "../../assets/NotFound.png";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div className="center-container">
        <img className="res-img sm-res-img" src={NotFoundImg} alt="404" />
        <h3>We couldn't find any matches!</h3>
        <div>Please check the spelling or try searching something else.</div>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </div>
    </>
  );
}

export { NotFound };
