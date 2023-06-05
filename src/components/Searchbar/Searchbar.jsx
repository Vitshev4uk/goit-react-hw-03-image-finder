import { Component } from 'react';
import css from './Searchbar.module.css';
import Button from 'components/Button/Button';
// import Modal from 'components/Modal/Modal';



class Searchbar extends Component {
  state = {
    value: '',
    btnText: 'Load more',
    submitted: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value) {
      if (this.state.value > 5) {
         const { onSubmit } = this.props;
      onSubmit(this.state.value)
      }
      }
  }

  handleInputValue = event => {
    const { value } = event.target;
    this.setState({ value: value });
  };

  loadMoreImages = () => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
  };

  onClickBtn = () => {
    this.setState({ submitted: true });
  }

  render() {
    const { onSubmit } = this.props;


    return (
      <>
      <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={(e) => { e.preventDefault(); onSubmit(this.state.value)}}>
            <button type="submit" onClick={this.onClickBtn } className={css.SearchFormButton} >
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
              onInput={this.handleInputValue}
              // onClick={() => { this.setState({value: ''})}}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
              placeholder="Search images and photos"
              value={this.state.value}
          />
        </form>
        </header>
        {/* <Modal/> */}
        {this.state.submitted && <Button onClick={this.loadMoreImages}>{this.state.btnText}</Button>}
        </>
    );
  }
}

export default Searchbar;
