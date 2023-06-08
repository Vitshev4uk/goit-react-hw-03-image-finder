import { Component } from 'react';
import css from 'styles.css/App/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from './Loader/Loader';
import Button from 'components/Button/Button';

class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    inputValue: '',
    submitted: false,
  };

  onSubmitForm = event => {
    this.setState({ inputValue: event });
    console.log(this.state.inputValue);

    this.setState({
      images: [],
      page: 1,
    });

    this.setState({
      isLoading: true,
    });
  };

  async loadMoreImages(page) {
    const key = '35632992-e10a39a36f128534b3670000b';
    const URL = 'https://pixabay.com/api/';
    const limit = 12;

    try {
      const response = await axios.get(
        `${URL}?key=${key}&q=${this.state.inputValue}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${page}`
      );
      const data = response.data.hits;
      console.log(data);
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ submitted: true });
    }
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      const key = '35632992-e10a39a36f128534b3670000b';
      const URL = 'https://pixabay.com/api/';
      const limit = 12;

      try {
        const response = await axios.get(
          `${URL}?key=${key}&q=${this.state.inputValue}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${this.state.page}`
        );
        const data = response.data.hits;
        console.log(data);
        this.setState({
          images: [...data],
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ submitted: true });
      }
    }
  }

  async componentWillUnmount() {}

  render() {
    const { submitted, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmitForm} />
        {isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
        {submitted && (
          <Button
            onClick={() => {
              this.setState(prevState => ({
                page: prevState.page + 1,
              }));
              this.loadMoreImages(this.state.page + 1);
            }}
          >
            Load more
          </Button>
        )}
      </div>
    );
  }
}
export default App;
