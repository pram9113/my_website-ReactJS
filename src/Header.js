import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li> 
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Portfolio <span className="sr-only">(current)</span></Link>
                        </li>   
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Project <span className="sr-only">(current)</span></Link>
                        </li>    
                    </ul>

                </div>    
            </nav>
        )
    }
}

export default Header;