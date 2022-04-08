import {
    Link
} from "react-router-dom";

const DegreeProgram = () => {
    return (
        <div className="std container1">
            <h2 class="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "20px", borderBottom: "1px dotted gray" }}>Degree Program</h2>
            <Link to="/degree-program/btech-p">B. Tech. Program</Link>
            <a href='/degree-program'>PhD Program</a>
        </div>


    )
}

export default DegreeProgram