import { Component } from "react";

class NavbarTop extends Component {
    render() {
        return (
            <header className='top-header'>
                <a href='#' className='site-logo'>Tylar.space</a>
                <nav className='top-nav'>
                    <ul className='top-nav-links'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='https://github.com/tjb2640' target='new'>GitHub</a></li>
                        <li><a href='#'>Writings</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavbarTop;
