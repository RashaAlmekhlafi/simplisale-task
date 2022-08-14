import { NavLink } from 'react-router-dom';
import './Nav.css'
// import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="/home">App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0 me-1">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Account
                        </a>
                        {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>

                        </div> */}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>< NavLink className="dropdown-item" to="/profile">User info</ NavLink></li>
                            <li>< NavLink className="dropdown-item" to="/logout">Logout</ NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        < NavLink style={actveStatus => ({
                            color: actveStatus.isActive ? "green" : "white"
                        })}
                            className="nav-link active" aria-current="page" to="/home">Products</ NavLink>
                    </li>
                    <li className="nav-item">
                        < NavLink style={actveStatus => ({
                            color: actveStatus.isActive ? "green" : "white"
                        })}
                            className="nav-link active" aria-current="page" to="/past-orders">Past orders</ NavLink>
                    </li>






                </ul>

            </div>
        </nav>
    )
}
export default Navbar