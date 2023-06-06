import { Component } from "react";
import css from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {


    render() {
        const { children, onClick } = this.props;
        return (
            <>
                <button type="submit" onClick={onClick} className={css.Button}>{ children }</button>
            </>
        )
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;