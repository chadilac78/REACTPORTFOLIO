import React, { Component } from "react";
import Card from "../Card/card"
import projects from "../projects.json"




class CardInfo extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        projects
    };

    render() {
        return (

            this.state.projects.map(project => (
                <Card
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    projectName={project.projectname}

                />
            ))

        );
    }
}


export default CardInfo;
