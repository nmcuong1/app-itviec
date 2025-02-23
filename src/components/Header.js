import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo_itviec.webp';

function Header() {
  return ( 
    
    <header className="header">
      <nav>
        <Link to="/">
              <img src={logo} alt="ITviec Logo" className="logo" />
            </Link>
            <ul className="dropdown">
              <i class="fas fa-h1    "></i>
  <li>
    <a href="/#">Việc làm IT</a>
    <ul className="dropdown-submenu">
      <li>
        <a href="/#">Việc làm theo kỹ năng</a>
        <ul className="dropdown-submenu">
          <li><a href="/#">Front-end Developer</a></li>
          <li><a href="/#">Back-end Developer</a></li>
          <li><a href="/#">Full-stack Developer</a></li>
          <li><a href="/#">Mobile Developer</a></li>
          <li><a href="/#">DevOps Engineer</a></li>
        </ul>
      </li>
      <li>
        <a href="/#">Việc làm theo cấp bậc</a>
        <ul className="dropdown-submenu">
          <li><a href="/#">Fresher</a></li>
          <li><a href="/#">Junior</a></li>
          <li><a href="/#">Senior</a></li>
          <li><a href="/#">Manager</a></li>
          <li><a href="/#">Director</a></li>
        </ul>
      </li>
      <li><a href="/#">Việc làm theo công ty</a></li>
      <li><a href="/#">Việc làm theo thành phố</a></li>
    </ul>
  </li>
  <li><a href="/#">Top Công Ty IT</a></li>
  <li><a href="/#">Blog</a></li>
</ul>

      </nav>
    </header>
  );
}

export default Header;
