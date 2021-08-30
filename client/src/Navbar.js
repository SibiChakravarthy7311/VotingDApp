import React from 'react'

const Navbar = ({account}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <p className="navbar-brand my-auto">Election Dapp</p>
                <ul className="navbar-nav d-flex">
                    <li><a className="nav-link nav-item text-white" href="#">{account}</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
