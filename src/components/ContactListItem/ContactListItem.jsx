import { Component } from 'react';
class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;
    return <li>{contact.name}</li>;
  }
}

export default ContactListItem;
