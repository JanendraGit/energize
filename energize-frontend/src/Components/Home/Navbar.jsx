import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is logged in when component mounts
    useEffect(() => {
        if (localStorage.getItem("userId")) {
            setIsLoggedIn(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? "navbar__scrolled" : ""}`}>
            <div className="nav__container">
                <div className="nav__header">
                    <div className="nav__logo">
                        <img src="../assets/PAF-Logo.JPG" alt="" />
                        <Link to="/">
                            <span className="logo__text">Energies</span>
                        </Link>
                    </div>

                    <div className="nav__search">
                        <form>
                            <input type="text" placeholder="Search workouts, trainers..." />
                            <button type="submit" className="search__button">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <button className="nav__menu__btn" onClick={toggleMenu}>
                        <div className={`menu__icon ${menuOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                <ul className={`nav__links ${menuOpen ? "open" : ""}`}>
                    <li className="nav__item">
                        <Link to="/workouts" className="nav__link">Workouts</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/nutrition" className="nav__link">Nutrition</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/trainers" className="nav__link">Trainers</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/community" className="nav__link">Community</Link>
                    </li>

                    <li className="nav__item nav__item--cta">
                        {isLoggedIn ? (
                            <Link to="/profile" className="nav__link nav__link--cta">My Dashboard</Link>
                        ) : (
                            <Link to="/get-started" className="nav__link nav__link--cta">Join Now</Link>
                        )}
                    </li>
                </ul>

                <div className="motivation-quote">
                    "No pain, no gain. Push yourself because no one else will."
                </div>
            </div>
        </nav>
    );
};

export default Navbar;