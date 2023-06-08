import { Component } from 'react';
import css from 'styles.css/App/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    inputValue: '',
  };
  componentDidMount() {}

  componentDidUpdate(_, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      // this.setState({page: 1})
    }
  }

  handleSameValue = data => {
    const locStorValue = localStorage.getItem('value');
    if (this.state.inputValue !== locStorValue) {
      // this.setState({ images: [...data] });
      // this.setState({ page: 1 });

      this.setState(prevState => ({
        images: [...data],
        // page:  1,
      }));
      console.log(true);
    }
    // } else {
    //   // this.setState({ images: [...data] });
    //   // this.setState({ page: 1 });
    //   // // console.log(false)
    //    this.setState(prevState => ({
    //      images: [...data],
    //      page: 1
    //   // page: prevState.page + 1,
    //    }));
    //   console.log(false)
    // }
  };

  onSubmit = async value => {
    const key = '35632992-e10a39a36f128534b3670000b';
    const URL = 'https://pixabay.com/api/';
    const limit = 12;
    const { page } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      const response = await axios.get(
        `${URL}?key=${key}&q=${value}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${page}`
      );
      const data = response.data.hits;
      console.log(data);

      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        // images:
        //   this.state.page !== 1 ? [...data] : [...prevState.images, ...data],
        page: prevState.page + 1,
      }));

      this.setState({ inputValue: value });
      this.handleSameValue(data);
      return value;
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
      this.setState({ overlay: true });
    }
  };

  render() {
    console.log(this.state.inputValue);
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
export default App;
