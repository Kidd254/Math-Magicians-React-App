import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-white text-2xl font-bold md:px-5 mb-2 md:mb-0">
        Math Magicians
      </h1>
      <ul className="flex items-center space-x-4 text-white md:my-0">
        <li>|</li>
        <li>
          <NavLink
            to="/"
            activeClassName="underline"
            className="hover:underline py-4"
          >
            Home
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="calculator"
            activeClassName="underline"
            className="hover:underline py-4"
          >
            Calculator
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink
            to="quote"
            activeClassName="underline"
            className="hover:underline py-4"
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
