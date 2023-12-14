import { Component } from 'react';
import css from './ContactListItem.module.css';
class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;
    const onDeleteHandler = this.props.onDeleteHandler;
    return (
      <li className={css['contact-list']}>
        {contact.name} {contact.number}
        <button
          className={css['delete-btn']}
          onClick={() => onDeleteHandler(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
