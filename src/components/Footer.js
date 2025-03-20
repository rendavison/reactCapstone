const Footer = () => {
    return(
        <footer>
            <section className="logo">
                <img src="../logo-vertical.png" alt="little lemon logo"/>
            </section>

            <section className="bottom-nav">
            <h4>Navigation</h4>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/order">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </section>

            <section className="contact">
                <h4>Contact</h4>
                <p>
                    123 Main Street<br />
                    Chicago, IL 12345
                </p>
                <p>
                    <a href="tel:5555555555" aria-label="link to call restaurant telephone number">(555) 555-5555</a>
                </p>
                <p>
                    <a href="mailto:example@email.com" aria-label="link to email restaurant">example@email.com</a>
                </p>
            </section>

            <section className="socials">
                <h4>Follow Us</h4>
                <img src="../facebook.png" alt="facebook logo"/>
                <img src="../instagram.png" alt="instagram logo"/>
                <img src="../twitter.png" alt="twitter logo"/>
                <img src="../tiktok.png" alt="tiktok logo"/>
            </section>
        </footer>
    )
}

export default Footer;