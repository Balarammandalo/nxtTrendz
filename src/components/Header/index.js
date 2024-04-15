// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div className="headerPart">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="webSiteImg"
      />
      <div className="buttonCard">
        <ul className="unOrderList">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/Product" className="nav-link">
            <li>Products</li>
          </Link>
          <Link to="/Cart" className="nav-link">
            <li>Cart</li>
          </Link>
        </ul>
        <button className="logButton" type="button">
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </div>
  </nav>
)

export default Header
