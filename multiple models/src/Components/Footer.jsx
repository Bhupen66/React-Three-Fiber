import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1em', background: '#333', color: '#fff' }}>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <nav>
                <a href="/about" style={{ color: '#fff', margin: '0 1em' }}>About</a>
                <a href="/contact" style={{ color: '#fff', margin: '0 1em' }}>Contact</a>
                <a href="/privacy" style={{ color: '#fff', margin: '0 1em' }}>Privacy Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
