const Nav = () => {
    return(
        <nav>
            <ul>
                <section class="left">
                    <li>
                        <a href="/about">
                            <h3>About</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/menu">
                            <h3>Menu</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/reservations">
                            <h3>Reservations</h3>
                        </a>
                    </li>
                </section>

                <section class="logo">
                    <li>
                        <a href="/">
                            <img src="../logo.jpg" alt="little lemon logo"/>
                        </a>
                    </li>
                </section>

                <section class="right">
                    <li>
                        <a href="/order">
                            <h3>Order online</h3>
                        </a>
                    </li>

                    <li>
                        <a href="/login">
                            <button>
                                <h3>login</h3>
                            </button>
                        </a>
                    </li>
                </section>
            </ul>
        </nav>
    )
}

export default Nav;