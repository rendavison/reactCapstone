const Footer = () => {
    return(
        <footer>
            <img src="" alt="Little Lemon logo"/>

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

            <h4>Follow Us</h4>
            <img src="" alt="facebook logo"/>
            <img src="" alt="instagram logo"/>
            <img src="" alt="twitter logo"/>
            <img src="" alt="tiktok logo"/>
        </footer>
    )
}

export default Footer;