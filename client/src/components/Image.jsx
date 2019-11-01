import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const { src, defaultSrc} = props;

    const imagePath = src ? `/images/${src._id}` : defaultSrc;

    return (
        <img src={imagePath} alt={imagePath} />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    defaultSrc: PropTypes.string
}

Image.defaultProps = {
    src: null,
    defaultProps: null
}

export default Image;