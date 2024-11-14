import Link from "next/link";
import SvgIcon from "../shared/svg-icon";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link href="#" className="side-nav__link">
            <SvgIcon className="side-nav__icon" mask="icon-home" />
            <span>Hotel</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link href="#" className="side-nav__link">
            <SvgIcon className="side-nav__icon" mask="icon-aircraft-take-off" />
            <span>Flight</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link href="#" className="side-nav__link">
            <SvgIcon className="side-nav__icon" mask="icon-key" />
            <span>Car Rental</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link href="#" className="side-nav__link">
            <SvgIcon className="side-nav__icon" mask="icon-map" />
            <span>Tours</span>
          </Link>
        </li>
      </ul>

      <div className="legal">&copy; 2024. All rights reserved.</div>
    </nav>
  );
};

export default SideBar;
