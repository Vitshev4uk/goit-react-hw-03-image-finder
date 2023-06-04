import { Component } from 'react';
import css from './Searchbar.module.css';
// import axios from 'axios';


class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputValue = event => {
    const { value } = event.target;
    this.setState({ value: value });
    // console.log(value);
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <header className={css.Searchbar}>
        <form className="form" onSubmit={(e) => { e.preventDefault(); onSubmit(this.state.value)}}>
          <button type="submit" className="button" >
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
