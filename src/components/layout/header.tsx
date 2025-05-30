import { logout } from "../../pages/auth/service";
import { Button } from "../button";
import { useAuth } from "../../pages/auth/context";
import { useNavigate } from "react-router";


function Header() {
    const navigate = useNavigate();
    const { isLogged, onLogout } = useAuth();
    const handleLogoutClick = async ()  => {
        await logout();
        onLogout();
    }

    const handleLoginClick = () => {
        navigate("/login")
    }

    return (<header>
        <div>Logo</div>
        <nav>
            {isLogged ? (
                <Button onClick={handleLogoutClick} text="Logout" type="button" classes="bg-sky-600 border-4 border-indigo-500/100 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"/>
            ) : (
                <Button onClick={handleLoginClick} text="Logout" type="button" classes="bg-sky-600 border-4 border-indigo-500/100 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"/> 
            )}
        </nav>
    </header>
    );
}

export default Header;