import React from "react";

function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "10px", background: "#f1f1f1" }}>
            <p>Copyright © {new Date().getFullYear()} | <a href="https://github.com/SahilTwitZ" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://shahil-portfolio-page.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
        </footer>
    );
}

export default Footer;
