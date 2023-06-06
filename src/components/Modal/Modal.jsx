import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {




  render() {
    const { children, close } = this.props;

    return (
      <div className={css.Overlay} onClick={() => { close()}}>
        <div className={css.Modal}>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
