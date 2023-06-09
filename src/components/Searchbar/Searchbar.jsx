import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
    btnText: 'Load more',
    submitted: false,
  };

  handleInputValue = event => {
    const { value } = event.target;
    this.setState({ value: value });
  };

  onClickBtn = () => {
    this.setState({ submitted: true });
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <>
        <header className={css.Searchbar}>
          <form
            className={css.SearchForm}
            onSubmit={(e) => { e.preventDefault(); onSubmit(this.state.value)} }
          >
            <button
              type="submit"
              onClick={this.onClickBtn}
              className={css.SearchFormButton}
            >
              <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              onInput={this.handleInputValue}
              className={css.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
