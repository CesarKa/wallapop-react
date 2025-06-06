import { logout } from "../../pages/auth/service";
import { Button } from "../button";
import { useAuth } from "../../pages/auth/context";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const { isLogged, onLogout } = useAuth();
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <div className="text-2xl font-bold text-sky-600">NodePop</div>

      <nav>
        {isLogged ? (
          <Button
            onClick={handleLogoutClick}
            text="Logout"
            type="button"
            classes="bg-sky-600 border-4 border-indigo-500/100 rounded px-4 py-2 text-white hover:bg-sky-700 focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        ) : (
          <Button
            onClick={handleLoginClick}
            text="Login"
            type="button"
            classes="bg-sky-600 border-4 border-indigo-500/100 rounded px-4 py-2 text-white hover:bg-sky-700 focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
