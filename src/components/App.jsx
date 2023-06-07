import { Component } from 'react';
import css from 'styles.css/App/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
import axios from 'axios';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
  };
  componentDidMount() { }
  
    componentDidUpdate(_, prevState) {
    if (prevState.images !== this.state.images) {
      console.log(this.state.images);
      console.log(this.state.images);
      } 
      
    }

  onSubmit = async (value) => {
    const key = '35632992-e10a39a36f128534b3670000b';
    const URL = 'https://pixabay.com/api/';
    const limit = 12;
    const { page } = this.state;

    this.setState({isLoading: true})

    try {
      const response = await axios.get(
        `${URL}?key=${key}&q=${value}&image_type=photo&orientation=horizontal&per_page=${limit}&page=${page}`
      );
      const data = response.data.hits;
      console.log(data)
      this.setState(prevState => ({
        // images: [...prevState.images, ...data],
        images: page === 1 ? data : [...prevState.images, ...data],
        page: prevState.page + 1,
      }));
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false })
      this.setState({overlay: true})
    }
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading &&<Loader/>}
        <ImageGallery images={this.state.images} />
        {/* <Modal images={this.state.images} /> */}
      </div>
      
    );
  }
}
export default App;
