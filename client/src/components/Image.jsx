import React from 'react';
import PropTypes from 'prop-types';

import FilePropTypes from '../prop-types/FileProps';

const Image = (props) => {
    const { src, defaultSrc} = props;

    const imagePath = src ? `/images/${src._id}` : defaultSrc;

    return (
        <img src={imagePath} alt={imagePath} />
    );
}

Image.propTypes = {
    src: FilePropTypes,
    defaultSrc: PropTypes.string
}

Image.defaultProps = {
    src: null,
    defaultProps: null
}

export default Image;