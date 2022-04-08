import React from 'react'

const Staff = () => {


    const staff = [
        {
            "name": "Mr. Muzaffar Ahmad Beigh",
            "designation": "Lab. Attendant"
        },
        {
            "name": "Mr.Mohammad Ashraf Kumar",
            "designation": "Lab. Attendant"
        },
        {
            "name": "Mr. Shahid-ul-Islam",
            "designation": "Office Attendant"
        },
        {
            "name": "Mr.Gh. Nabi",
            "designation": "Orderly"
        }
    ]

    return (
        <div className='staff-container container1'>
            <h2 className="page_title" style={{ fontSize: "20px", fontWeight: "bold",width:"90%",margin:"0 auto" }}>Staff Members</h2>
            <table id="customers">
                <tr className="head staff-tr">
                    <th>Sr. No.</th>
                    <th>Staff member</th>
                    <th>Designation</th>
                </tr>
                {staff.map((staffm, index) => {
                    return (
                        <tr className="rows">
                            <td>{index + 1}</td>
                            <td>{staffm.name}</td>
                            <td>{staffm.designation}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default Staff