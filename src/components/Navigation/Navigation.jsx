import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
    const buildLinkClass = ({isActive}) => {
        return clsx(css.link, isActive && css.active)
    }

    return (
        <div>
            <nav className={css.nav}>
                <NavLink to="/" className={buildLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/catalog" className={buildLinkClass}>
                    Catalog
                </NavLink>
                <NavLink to="/favorites" className={buildLinkClass}>
                    Favorites
                </NavLink>
            </nav>
        </div>
    )
}