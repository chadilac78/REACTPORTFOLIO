import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                <div className="card-body">
                    <h1 className="card-title" style={{ color: "red" }}>{props.projectname}</h1>
                    <h2 className="card-text" style={{ color: "red" }}>{props.description}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card





