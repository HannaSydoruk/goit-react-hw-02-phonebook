import ContactListItem from 'components/ContactListItem/ContactListItem';
import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <h2>Contacts</h2>
        <ul className="contactlist">
          {contacts.map(contact => {
            return <ContactListItem contact={contact} key={contact.id} />;
          })}
        </ul>
      </>
    );
  }
}

export default ContactList;
