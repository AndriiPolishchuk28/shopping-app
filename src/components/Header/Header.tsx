import { FC } from "react";
import { INavLinkItem } from "./interface";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

const navLinks: INavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
];

const Header: FC = () => {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <ul className={scss.list}>
          {navLinks.map((link) => (
            <li className={scss.item} key={link.name}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  color: isActive ? "blue" : "black",
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
