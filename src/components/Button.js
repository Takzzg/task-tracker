import PropTypes from 'prop-types'

function Button(props) {
    const { color, text, onClick } = props

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="btn"
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button
