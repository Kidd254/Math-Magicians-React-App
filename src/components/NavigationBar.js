import { NavLink } from 'react-router-dom';
import styles from '../Styles/NavigationBar.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>Math Magicians</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>|</li>
        <li className={styles.li}>
          <NavLink
            to="calculator"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Calculator
          </NavLink>
        </li>
        <li>|</li>
        <li className={styles.li}>
          <NavLink
            to="quote"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
