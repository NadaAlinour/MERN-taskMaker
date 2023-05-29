import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <Link to="/">
          <h1>Task Maker</h1>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
