import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="gallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li className="gallery-item" key={id}>
            <img src={webformatURL} alt="" />
          </li>
        ))}
      </ul>
    );
  }
}

export default ImageGalleryItem;
