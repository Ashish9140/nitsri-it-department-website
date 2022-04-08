import React from 'react'

const FacultyCoordinators = () => {

    const staff = [
        {
            "name": "Dr. Shabir Ahmad Sofi",
            "responsibility": ["Spoken Tutorials Coordinator"],
            "contact": "shabir@nitsri.ac.in"
        },
        {
            "name": "Dr. Iqra Altaf",
            "responsibility": ["Time Table Coordinator"],
            "contact": "iqraaltaf@nitsri.ac.in"
        },
        {
            "name": "Dr. Prabal Verma",
            "responsibility": ["4th Year Coordinator"],
            "contact": "prabal.verma@nitsri.net"
        },
        {
            "name": "Dr. Shrabanti Mandal",
            "responsibility": ["3rd Year Coordinator"],
            "contact": "shrabanti.mandal@nitsri.ac.in"
        },
        {
            "name": "Dr. Amritpal Singh",
            "responsibility": ["2nd Year Coordinator"],
            "contact": "amrit.singh@nitsri.ac.in"
        },
        {
            "name": "Dr. Janibul Bashir",
            "responsibility": ["1st Year Coordinator", "I/C Deparmental Purchase", "Coordinator Examinations"],
            "contact": "janibbashir@nitsri.ac.in"
        }
    ]

    return (
        <div className='staff-container container1'>
            <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold", width: "90%", margin: "0 auto" }}>Faculty Coordinators</h2>
            <table id="customers">
                <thead>
                    <tr className="head staff-tr">
                        <th>Name</th>
                        <th>Responsibility</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map((staffm, index) => {
                        return (
                            <tr className="rows" key={index}>
                                <td>{staffm.name}</td>
                                <td>
                                    {
                                        staffm.responsibility.map((res, index) => {
                                            return (
                                                <p key={index}>{res}</p>
                                            )
                                        })
                                    }
                                </td>
                                <td>{staffm.contact}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FacultyCoordinators