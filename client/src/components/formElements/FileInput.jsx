import React from 'react';
import PropTypes from 'prop-types';

import fileApi from '../../api/fileApi'; 
import showResponseError from '../../utils/showResponseError';

const FileInput = (props) => {
    const {
        id, downloadComponent: DownloadComponent, onChange, 
    } = props;

    let refFileInput = React.createRef();

    const clickDownloadHandler = () => {
        refFileInput.current.click();
    }

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

    return (
        <div>
            <label htmlFor={id} onClick={clickDownloadHandler} >
                <DownloadComponent />
            </label>
            <input 
                id={id}
                type="file"
                onChange={changeFileHandler} 
                accept="image/jpeg, image/jpg, image/png, image/gif"
                hidden
                ref={refFileInput}
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