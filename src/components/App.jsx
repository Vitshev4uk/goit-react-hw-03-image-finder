import { Component } from 'react';
import css from 'styles.css/App/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import axios from 'axios';

class App extends Component {

  state = {
    images: []
  }

  onSubmit = async (value) => {
    const key = '35632992-e10a39a36f128534b3670000b';
    const URL = 'https://pixabay.com/api/';
    const limit = 12;
    let page = 1

    try {
      const response = await axios.get(`${URL}?key=${key}&q=${value}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${page}`);
      const data = response.data.hits;
      // console.log(data);
      // data.map(item => {
      //   console.log(item.id, item.webformatURL, item.largeImageURL)
      // })
      this.setState({ images: data })
      // console.log(this.state.images)
      return data;
    } catch (error) {
      console.error(error);
    }
  };

    componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      console.log(this.state.images);
    }
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
        <ImageGalleryItem images={ this.state.images } />
        <Modal />
      </div>
    );
  }
}
export default App;
