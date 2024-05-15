import React from "react";

const Navigation = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/easy">
      Home
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
        <li className="nav-item active">
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/easy">
            Kanto(Easy)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hard">
           Kanto
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Johto">
           Johto
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pokedex">
           Pokedex
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
  </nav>)
}
export default Navigation