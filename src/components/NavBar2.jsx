const NavBar2 = () => {
  return (
    <section id="navbar-top">
      <nav className="navbar fixed-top">
        <a className="navbar-brand p-0 m-0" href="#">
          <div className="arrows">
            <div className="d-flex align-items-center">
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
          </div>
        </a>

        <div className="profile d-flex align-items-center ml-auto">
          <div className="icon-container d-flex align-items-center justify-content-center">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-encore-id="icon"
              className="Svg-sc-ytk21e-0 uPxdw"
            >
              <path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path>
            </svg>
          </div>
          <div className="profile-name truncate2"></div>
          <div className="mr-2 mb-1">
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k down-arrow"
              viewBox="0 0 16 16"
              data-encore-id="icon"
            >
              <path d="M14 6l-6 6-6-6h12z"></path>
            </svg>
          </div>
        </div>

        <ul className="dropdown-menu d-none">
          <li>
            <a
              className="dropdown-item d-flex justify-content-between p-2"
              href="#"
            >
              Account
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                aria-label="External link"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 uPxdw"
              >
                <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
                <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="dropdown-item p-2" href="#">
              Upgrade to Premium
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                aria-label="External link"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 uPxdw"
              >
                <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
                <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="dropdown-item p-2" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item p-2" href="#">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item p-2" href="login-page.html">
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar2;
