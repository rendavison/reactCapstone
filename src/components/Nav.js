import { Link } from 'react-router';

const Nav = () => {
    return(
        <nav>
            <ul>
                <section class="left">
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

                <section class="logo">
                    <li>
                        <Link to="/">
                            <img src="../logo.jpg" alt="little lemon logo"/>
                        </Link>
                    </li>
                </section>

                <section class="right">
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