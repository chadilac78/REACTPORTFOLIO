import React from "react";
import "./style.css";
import Footer from "../footer/footer"
import { Link } from "react-router-dom";

function ContactCard(props) {

    console.log(props.name)
    return (

        <div className="col-md-4">
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                <div className="card-body">
                    <h1 className="card-title" style={{ color: "red", textAlign: "center" }}>{props.name}</h1>
                    <h2 className="card-text" style={{ color: "blue", textAlign: "center" }}>{props.description}</h2>
                    <Link to={props.link}>Click Here</Link>
                </div>
            </div>
        </div>

    );
}

export default ContactCard;
