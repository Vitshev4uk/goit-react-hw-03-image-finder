import { Component } from 'react';
import css from './imageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    selectedImage: '',
  };

  toggleModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen
    }))
  }

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
    const {  isModalOpen, selectedImage } = this.state;
    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li className={css.ImageGalleryItem} key={id}>
            <img src={webformatURL} alt='' className={css.imageGalleryItemImage} onClick={() => { this.openModal(largeImageURL)}}/>
            {isModalOpen && <Modal close={this.closeModal}>
              <img src={ selectedImage } alt='' />
              </Modal>}
          </li>
        ))}
      </>
    );
  }
}



export default ImageGalleryItem;
