import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');



class Modal extends Component {
  

  componentDidMount() {
    const { close } = this.props;
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        close();
      }
    })
  
  }

  componentWillUnmount() {
    const { close } = this.props;
    document.removeEventListener('keydown', close)
  }

  
  render() {
    const { children, close } = this.props;

    return createPortal(<div className={css.Overlay} onClick={() => { close()}}>
        <div className={css.Modal}>
          {children}
        </div>
      </div>, modalRoot)
  }
}

export default Modal;


//  <div className={css.Overlay} onClick={() => { close()}}>
//         <div className={css.Modal}>
//           {children}
//         </div>
//       </div>