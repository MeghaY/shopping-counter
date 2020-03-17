import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        const {totalCounters} = this.props;
        return (
            <nav className="navbar navbar-light bg-light">
                <button className="navbar-brand">
                    Navbar {" "}
                    <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                    </span>
                </button>
            </nav>
        );
    }
}
export default NavBar;