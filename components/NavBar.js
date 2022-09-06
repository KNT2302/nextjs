import Link from "next/link"
import React, { useContext } from "react"
import { useRouter } from "next/router"
import Cookie from 'js-cookie'
import { DataContext } from "../store/GlobalState"

const NavBar = () => {

  const router = useRouter()

  const [state, dispatch] = useContext(DataContext)

  const { auth } = state


  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: "Logged out!" } })
  }

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {auth.user.name}
        </a>
        <div
          className="dropdown-menu"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <a className="dropdown-item">
            Profile
          </a>
          <a className="dropdown-item" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </li>
    )
  }


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
      <div className="collapse navbar-collapse" id="navbarNavDropdown" >
        <ul className="navbar-nav">

          <Link className={`nav-item ${isActive("/cart")}`} href="/cart">
            <a className="nav-link"><i className="fas fa-shopping-cart" aria-hidden></i>Cart</a>
          </Link>
          {
            Object.keys(auth).length === 0 ?
              <Link className={`nav-item ${isActive("/signin")}`} href="/signin">
                <a className="nav-link"><i className="fas fa-user" aria-hidden></i>Sign in</a>
              </Link> : loggedRouter()
          }

        </ul>
      </div>
    </nav>
  )
}

export default NavBar
