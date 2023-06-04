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
    const { value } = this.state;
    console.log(value);
    // const key = '35632992-e10a39a36f128534b3670000b'

    // const data = await axios.get(`https://pixabay.com/api/?key=${key}&q=${value}`);
    // console.log(data.total.hits)
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
