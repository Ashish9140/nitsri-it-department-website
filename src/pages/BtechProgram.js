import React from 'react'

const BtechProgram = () => {
    return (
        <div className="btdeg-wrapper-container-1 container">
            <div className="btdeg-wrapper-container-2">
                <p className="btdeg-Heading">B-Tech Program</p>
                <p className="btdeg-Heading-motto">"Leading Technology Leveraging Technology"</p>
                <br />
                <div className="accordion btdeg-accordion-bd" id="accordionPanelsStayOpenExample">
                    <button className="accordion-button btdeg-accordian-active btdeg-accordion-bd" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Program
                    </button>
                    <div className="accordion-item btdeg-accordion-bd">
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body btdeg-accordion-bd btdeg-font-style">
                                The Department of<strong className="btdeg-strong"> Information Technology </strong> in <strong className="btdeg-strong">NIT Srinagar</strong> was established in 2007, offering four year undergraduate programme (B.Tech) in Information Technology. This undergraduate programme is of 4 years duration with the first year spread over two semesters which is common to all the branches. The intake capacity of the department was 40 in 2007 and then subsequently increased to 90 in 2020. The Department offers a broad curriculum including: Database Management, Software Engineering, Management of Information Systems, Data mining, Computer Graphics, Advanced Internet Technology, Computer Networks, Operating System, Data Structures and Algorithms as the main courses and other courses in collaboration with the other departments of the institute at the undergraduate level. <br /> <br />

                                The Department of Information Technology embodies the Institute's tradition of excellence as a world-class leader in IT education and research. IT sector is in a period of bloom in terms of growth and opportunity. In the current ever evolving industrial scenario contents delivered to the students are regularly updated by the faculty members who have themselves are well acquainted with path breaking research and innovations in the present technology-oriented world. <br /> <br />

                                In addition to academic courses, the department also has IT research programmes supported through government funding and industry sponsorship. Faculty research helps expand the current and future use of new and existing technologies.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item btdeg-accordion-bd">
                        <button className="accordion-button collapsed btdeg-accordion-bd btdeg-curr-width" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Curriculum
                        </button>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse btdeg-btdeg-accordion-bd" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body btdeg-btdeg-accordion-bd btdeg-font-style">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default BtechProgram