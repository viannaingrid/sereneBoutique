import {
    faBars,
    faSearch,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../components/NavBar.css";

export default function NavBar() {
    return (
        <div className="nav">
            <div className="inner-content">
                <h1 className="logo">
                    Serene <span>Boutique</span>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/userAccount">Account</Link>
                        </li>
                    </ul>
                </nav>
                <section className="navs-icon-container">
                    <div className="search-input-container">
                        <input type="search" placeholder="Search..." />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <button className="shopping-cart">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                        <div className="products-count">15</div>
                    </button>
                    <button className="menu-button">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </section>
            </div>
        </div>
    );
}
