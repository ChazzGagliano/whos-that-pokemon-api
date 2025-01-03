import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <a className="navbar-brand" href="/">
        <img
          className="poke-logo"
          src="https://loodibee.com/wp-content/uploads/International-Pokemon-logo.png"
        ></img>
      </a>
      <a className="navbar-brand" href="/signup">
        Signup
      </a>
      <a className="navbar-brand" href="/login">
        Login
      </a>
      <a className="navbar-brand" href="/profile">
        Profile
      </a>
      <a href="/search">
        <img
          src="https://www.iconpacks.net/icons/2/free-search-icon-2911-thumb.png"
          className="search"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active"></li>
          <li className="nav-item">
            <a href="/">
              <img
                src="https://pogo.gamepress.gg/sites/default/files/2018-02/Badge_Pokedex_SILVER_01.png"
                className="Badge"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/hard">
              <img
                src="https://pogo.gamepress.gg/sites/default/files/2018-02/Badge_Pokedex_GOLD_01.png"
                className="Badge"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/Johto">
              <img
                src="https://pogo.gamepress.gg/sites/default/files/2018-02/Badge_PokedexJohto_Gold_01.png"
                className="Badge"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="/Pokedex">
              <img
                src="https://cdn-icons-png.flaticon.com/512/188/188940.png"
                className="Badge"
              />
            </a>
          </li>
          <li className="nav-item dropdown">
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
