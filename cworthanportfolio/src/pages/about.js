import React from "react"
import Footer from "../components/footer/footer"
import Mypic from "../images/mypic/thumbnail.jpg"



function About() {
    return (
        <div className="container">
            <img src={Mypic} style={{ height: 500, width: 500, float: 'left', margin: 10 }} alt="Chad Worthan"></img>
            <h1 style={{ color: "black", fontSize: 45, textAlign: "center" }} > About Me </h1>
            <p style={{ textAlign: "center" }} style={{ fontSize: "30px" }}>
                My name is Chad Worthan. I am first and foremost a father, grandfather and husband. I live
                and work in San Antonio, TX. I have worked in logistics since 2001. I have held many
                positions in logistics throughout the years. I have been a Production/Planner Scheduler,
                Dispatcher, Dispatch/Driver manager, Shipping Team-leader, and most recently Operations
                Manager.</p>
            <p style={{ textAlign: "center" }} style={{ fontSize: "30px" }}>
                My career has allowed me the opprotunity to be a part of many great teams. I am a team
                first person. I am currently enrolled in UTSA's coding bootcamp. My target graduation is
                July 8 2020.

            </p>
            <Footer />
        </div >

    )
}

export default About;

