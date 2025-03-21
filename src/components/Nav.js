import { Link } from 'react-router';
import { openNav, closeNav } from '../utils/mobileNav';

const Nav = () => {
    return(
        <nav>
            <ul>
                {/* mobile nav links */}
                <section id="mobile-nav" class="mobile-only" onclick="openNav()">
                    <i class="fas fa-bars"></i>
                </section>

                <section className="mobile-links" id="sideNav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <li>
                        <Link to="/about">
                            <h3>About</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu">
                            <h3>Menu</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reservations">
                            <h3>Reservations</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/order">
                            <h3>Order online</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                    </li>
                </section>


                {/* desktop nav links */}
                <section className="desktop-only left">
                    <li>
                        <Link to="/about">
                            <h3>About</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu">
                            <h3>Menu</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reservations">
                            <h3>Reservations</h3>
                        </Link>
                    </li>
                </section>

                <section className="logo">
                    <li>
                        <Link to="/">
                            <img src="../logo.jpg" alt="little lemon logo" className="desktop-only"/>
                            <img src="../logo-vertical.png" alt="little lemon logo" className="mobile-only"/>
                        </Link>
                    </li>
                </section>

                <section className="right">
                    <li>
                        <Link to="/order">
                            <h3>Order online</h3>
                        </Link>
                    </li>

                    <li>
                        <Link to="/login">
                            <button>
                                <h3>login</h3>
                            </button>
                        </Link>
                    </li>
                </section>
            </ul>
        </nav>
    )
}

export default Nav;