import { Component } from 'react';
import css from './imageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li className={css.ImageGalleryItem} key={id}>
            <img src={webformatURL} alt="photo" className={css.imageGalleryItemImage} />
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
