import React from 'react'
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <nav className="NavBar">
                    <ul>
                        <li>
                            <span className="Logo"><Link to="/">ASIS-ME</Link></span><br />
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default NavBar