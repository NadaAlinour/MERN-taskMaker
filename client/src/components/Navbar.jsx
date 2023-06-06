import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <nav>
        <div className="nav-container">
          <Link to="/">
            <p>Task Maker</p>
          </Link>
          {user && (
            <div>
              <span>{user.email}</span>
              <button className="logout-btn" onClick={handleClick}>
                logout
              </button>
            </div>
          )}

          {!user && (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
