import React from 'react'

const Navbar = ({account}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <p className="navbar-brand my-auto">Election Dapp</p>
                <ul className="navbar-nav d-flex">
                    <li><a class="nav-link nav-item text-white" href="#">{account}</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
