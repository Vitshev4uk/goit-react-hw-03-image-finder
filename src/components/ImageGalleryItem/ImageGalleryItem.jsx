import { Component } from 'react';
import css from './imageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    selectedImage: '',
  };

  openModal = (selectedImage) => {
    this.setState({
      isModalOpen: true,
      selectedImage: selectedImage,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      selectedImage: '',
    });
  };

  render() {
    const { images } = this.props;
    const { isModalOpen, selectedImage } = this.state;
    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          // <li className={css.ImageGalleryItem} key={id}>
            <li key={id}>
            <img className={css.imageGalleryItemImage} src={webformatURL} alt=''  onClick={() => { this.openModal(largeImageURL)}}/>
          </li>
        ))}
        {selectedImage && (
        <Modal close={this.closeModal}>
          <img src={selectedImage} alt='' />
        </Modal>
      )}

      </>
    );
  }
}
  



export default ImageGalleryItem;
