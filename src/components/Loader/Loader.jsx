import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

class Loader extends Component  {
  render() {
    return (
      <div className={css.Ball}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
