import PropTypes from 'prop-types';

const FilePropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
});

export default FilePropTypes;