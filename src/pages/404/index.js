import "./index.sass";
import { ReactComponent as Image404 } from "../../assets/images/404-image.svg";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Page404() {
  return (
    <div className="page-404">
      <Fade bottom>
        <Image404 className="page-404-title" />
        <h2 className="page-404-description">
          The page you were looking for doesn't exist.
        </h2>
        <NavLink to="/" className="page-404-link">
          Return home
        </NavLink>
      </Fade>
    </div>
  );
}
