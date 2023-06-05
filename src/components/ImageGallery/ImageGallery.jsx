import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
        <ul className={css.ImageGallery}>
          <ImageGalleryItem images={ images } />
        </ul>
    );
  }
}

export default ImageGallery;
