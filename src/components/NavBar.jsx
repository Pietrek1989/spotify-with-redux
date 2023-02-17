import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="d-flex justify-content-between">
        <div className="arrows d-flex">
          <div className="icon-container d-flex align-items-center justify-content-center mr-3">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
              viewBox="0 0 16 16"
              data-encore-id="icon"
            >
              <path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"></path>
            </svg>
          </div>
          <div className="icon-container d-flex align-items-center justify-content-center">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
              viewBox="0 0 16 16"
              data-encore-id="icon"
            >
              <path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"></path>
            </svg>
          </div>
        </div>
        <div>hej</div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
