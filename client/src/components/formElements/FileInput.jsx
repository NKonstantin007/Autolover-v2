import React from 'react';
import PropTypes from 'prop-types';

import fileApi from '../../api/fileApi'; 
import showResponseError from '../../utils/showResponseError';

const FileInput = (props) => {
    const {
        id, downloadComponent: DownloadComponent, onChange, 
    } = props;

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('uploadFile', file);

        try{
            const response = await fileApi.uploadFile(formData);
            const file = response.data;
            onChange(file);
        }
        catch(err) {
            showResponseError(err);
            console.log(err);        
        }
    }

    const changeFileHandler = (e) => {
        const file = e.target.files[0];
        uploadFile(file);
    }

    let refFileInput = null;

    return (
        <div>
            <label htmlFor={id}>
                <DownloadComponent onClick={() => refFileInput.click()} />
            </label>
            <input 
                id={id}
                type="file"
                onChange={changeFileHandler} 
                accept="image/jpeg, image/jpg, image/png, image/gif"
                ref={(ref) => { refFileInput = ref; }}
            />
        </div>
    )
}

FileInput.propTypes = {
    id: PropTypes.string.isRequired, 
    downloadComponent: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired, 
};

export default FileInput;