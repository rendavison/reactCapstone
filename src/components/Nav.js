const Nav = () => {
    return(
        <nav>
            <ul>
                <a href="/about">
                    <li>
                        <h3>About</h3>
                    </li>
                </a>
                <a href="/menu">
                    <li>
                        <h3>Menu</h3>
                    </li>
                </a>
                <a href="/reservations">
                    <li>
                        <h3>Reservations</h3>
                    </li>
                </a>

                <a href="/">
                    <li>
                        <img src="../logo.jpg" alt="little lemon logo"/>
                    </li>
                </a>

                <a href="/order">
                    <li>
                        <h3>Order online</h3>
                    </li>
                </a>
                <a href="/login">
                    <li>
                        <h3>Login</h3>
                    </li>
                </a>
            </ul>
        </nav>
    )
}

export default Nav;