import { Component } from 'react';

class Filter extends Component {
  render() {
    const onChangeFilter = this.props.onChangeFilter;
    const filter = this.props.filter;
    return (
      <>
        <p>Find contacts by name:</p>
        <input
          type="text"
          value={filter}
          name="keywords"
          onChange={onChangeFilter}
        />
      </>
    );
  }
}

export default Filter;
