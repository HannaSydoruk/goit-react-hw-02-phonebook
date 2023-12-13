import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
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

  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
