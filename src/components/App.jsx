import { Component } from "react";
import css from 'styles.css/App/App.module.css'
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from "./Modal/Modal";

class App extends Component {

  // handleInputValue = (event) => {
  //   event.preventDefault();
    // const {name, value} = event.target;
    // this.setState({ name: value })
    // console.log(name, value)
    // return value
    // console.log(this.state.value);
  // }

  render() {
      return (
    <div className={css.App}>
          <Searchbar onSubmit={ this.handleInputValue} />
          <ImageGallery />
          <ImageGalleryItem />
          <Modal/>
    </div>
  );
  }
}
export default App;
