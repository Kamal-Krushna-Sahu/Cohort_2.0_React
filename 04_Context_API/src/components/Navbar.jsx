import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav className={`nav ${theme === "light" ? "light" : "dark"}`}>
      <div>Navbar</div>
      <p>Theme: {theme}</p>
      <button onClick={changeTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
