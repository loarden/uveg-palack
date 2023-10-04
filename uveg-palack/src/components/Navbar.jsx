function Navbar() {
  return (
    <>
      <div className="container-fluid bg-dark p-0">
        <div className="container-xl">
          <div className="d-flex justify-content-end gap-3 md-p-1 p-2">
            <div className="text-decoration-none">
              <a
                href="tel:+36204848897"
                className="text-decoration-none text-white"
              >
                +36/20-484-8897
              </a>
            </div>
            <div>
              <a
                href="mailto:info@uveg-palack.hu"
                className="text-decoration-none text-white"
              >
                info@uveg-palack.hu
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md shadow-sm sticky-top bg-white">
        <div className="container-xl">
          <a href="/" className="navbar-brand">
            K es B <span className="d-block ">Glass</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Kezdolap
                </a>
              </li>
              <li className="nav-item">
                <a href="/rolunk" className="nav-link">
                  Rolunk
                </a>
              </li>
              <li className="nav-item">
                <a href="/termekek" className="nav-link">
                  Termekek
                </a>
              </li>
              <li className="nav-item">
                <a href="/kapcsolat" className="nav-link">
                  Kapcsolat
                </a>
              </li>
            </ul>
          </div>
          <form class="d-flex collapse navbar-collapse">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
