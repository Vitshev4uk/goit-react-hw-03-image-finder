import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {




  render() {
    const { children, closeModal } = this.props;

    return (
      // <div className={css.Overlay}>
      //   <div className={css.Modal}>
      //     <img src="" alt="" />
      //   </div>
      // </div>

      
      // <div className={css.Overlay} onClick={closeModal}>
        <div className={css.Modal} >
          {/* <button className={css.closeButton} onClick={closeModal}>
            &times;
          </button> */}
          {children}
        </div>
      // </div>
    );
  }
}

export default Modal;
