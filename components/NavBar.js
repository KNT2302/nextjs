import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const NavBar = () => {

  const router = useRouter()

  const isActive = (router) => {
    if (router === router.pathname) {
      return "active"
    }
    else {
      return ""
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">E-commerce</a>
      </Link>
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
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link className={`nav-item ${isActive("/cart")}`} href="/cart">
            <a className="nav-link"><i className="fas fa-shopping-cart" aria-hidden></i>Cart</a>
          </Link>

          <Link className={`nav-item ${isActive("/signin")}`} href="/signin">
            <a className="nav-link"><i className="fas fa-user" aria-hidden></i>Sign in</a>
          </Link>

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User name
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
