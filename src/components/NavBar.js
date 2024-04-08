
import './navbar.css'
import Logo from '../assets/logos/logo.svg'


export const NavBar = () => {

    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={Logo}></img>
                </div>
                <div className='navbar-items-container'>
                    <div className="navbar-item">Talent finder </div>
                    <div className="navbar-item">For Recruiters</div>
                    <div className="navbar-item">For Employers</div>
                    <div className="navbar-item">About Us</div>
                    <div className="navbar-item">Company</div>
                </div>
                <div className="navbar-buttons-container">
                    <button className="navbar-button">Log in</button>
                    <button className="navbar-button purple-background">Get Started</button>
                </div>
            </div>
        </div>
    )
}