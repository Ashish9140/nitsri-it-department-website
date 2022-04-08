import {
    Link
} from "react-router-dom";

const Student = () => {
    return (
        <div className="std container1">
            <h2 class="page_title" style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", borderBottom: "1px dotted gray" }}>IT Students</h2>
            <Link to="student/batch_2020">2020 Batch</Link>
            <Link to="student/batch_2019">2019 Batch</Link>
            <a href="/syllabus/2018.pdf" target="_blank">2018 Batch</a>
            <a href="/syllabus/2017_student.pdf" target="_blank">2017 Batch</a>
            <a href="/syllabus/2016_student.pdf" target="_blank">2016 Batch</a>
            <a href="/syllabus/2015_student.pdf" target="_blank">2015 Batch</a>
        </div>
    )
}

export default Student