import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }}>IT Department</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Academics
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/degree-program" className="dropdown-item">Degree Program</Link></li>
                                <li> <Link to="/vision-mission" className="dropdown-item">Vision and Mission</Link></li>
                                <li><a className="dropdown-item" href="/">Courses</a></li>
                                <li> <Link to="/coordinators" className="dropdown-item">Coordinators</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                People
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/faculty" className="dropdown-item">Faculty</Link></li>
                                <li> <Link to="/phd-scholars" className="dropdown-item">PhD Students</Link></li>
                                <li> <Link to="/student" className="dropdown-item">Students</Link></li>
                                <li><a className="dropdown-item" href="/">Alumni</a></li>
                                <li> <Link to="/staff" className="dropdown-item">Staff</Link></li>
                                <li><a className="dropdown-item" href="/">Join Us</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Research
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/research-area" className="dropdown-item">Areas</Link></li>
                                <li> <Link to="/research-papers" className="dropdown-item">Papers</Link></li>
                                <li><a className="dropdown-item" href="/">Technical Reports</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                News and Events
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li> <Link to="/news-letter" className="dropdown-item">Department Newsletter</Link></li>
                                <li><a className="dropdown-item" href="/">Talks By Visitors</a></li>
                                <li><a className="dropdown-item" href="/">IT Seminar</a></li>
                                <li><a className="dropdown-item" href="/">News and Highlights</a></li>
                                <li><a className="dropdown-item" href="/">Internal</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Student Activities
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">ACES ACM</a></li>
                                <li><a className="dropdown-item" href="/">Teaching Assistant Award</a></li>
                                <li><a className="dropdown-item" href="/">Student Project Award</a></li>
                                <li><a className="dropdown-item" href="/">Placement Brochure 2021</a></li>
                                <li><a className="dropdown-item" href="/">Graduate Batch Photos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar