import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === data.name
    );
    if (hasDuplicates) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  onChangeFilter = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  onDeleteHandler = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLocaleLowerCase());
    });
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Filter
          onChangeFilter={this.onChangeFilter}
          filter={this.state.filter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteHandler={this.onDeleteHandler}
        />
      </>
    );
  }
}
