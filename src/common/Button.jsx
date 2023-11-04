import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    children: PropTypes.node

};

export default Button;
