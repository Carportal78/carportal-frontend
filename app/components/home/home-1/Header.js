import Link from "next/link";
import MainMenu from "../../common/MainMenu";
import Image from "next/image";

const Header = ({ carModelList }) => {
  return (
    <header className="header-nav menu_style_home_one transparent main-menu">
      <nav>
        <div className="container posr">
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <Link href="/" passHref>
            <div className="navbar_brand float-start dn-md">
              <Image
                width={60}
                height={60}
                src="/images/Carportal-Logo.png"
                alt="Carportal-Logo"
              />
            </div>
          </Link>
          <ul
            id="respMenu"
            className="ace-responsive-menu text-end"
            data-menu-style="horizontal"
          >
            <MainMenu />
            <li
              className="sidebar_panel"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <a className="sidebar_switch pt0" role="button">
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
