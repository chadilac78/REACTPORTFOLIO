import React, { Component } from "react";
import ContactCard from "../contactcard/contactcard"
import Contacts from "../contact.json"




class ContactInfo extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        Contacts
    };

    render() {
        return (

            this.state.Contacts.map(contact => (
                <ContactCard
                    id={contact.id}
                    key={contact.id}
                    name={contact.name}
                    image={contact.image}
                    description={contact.description}
                    link={contact.link}

                />
            ))

        );
    }
}


export default ContactInfo;