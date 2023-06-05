import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <Link to='/'><p>Task Maker</p></Link>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
