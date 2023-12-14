import { Component } from 'react';
class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;
    const onDeleteHandler = this.props.onDeleteHandler;
    return (
      <li>
        {contact.name} {contact.number}
        <button onClick={() => onDeleteHandler(contact.id)}>Delete</button>
      </li>
    );
  }
}

export default ContactListItem;
