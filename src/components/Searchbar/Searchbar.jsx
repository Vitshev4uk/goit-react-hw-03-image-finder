import { Component } from 'react';
import css from './Searchbar.module.css';
// import axios from 'axios';

class Searchbar extends Component {
  state = {
    value: '',
  }

  handleInputValue = (event) => {
    const { value} = event.target;
    this.setState({ value: value })
    console.log(value)
  }

  onSubmitForm = async (event) => {
    event.preventDefault();
    console.log(this.state.value);

    // const data = await axios.get()
  }

  render() {
    // const { onSubmit } = this.props;
    return (
      <header className={css.Searchbar}>
        <form className="form" onSubmit={this.onSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onInput={this.handleInputValue}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
