import { Component } from "react";
import css from './Button.module.css';

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
export default Button;