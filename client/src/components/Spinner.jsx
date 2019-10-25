import React from 'react';

import {StyledSpinner, SpinnerWrapper} from './styles/Spinner';

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <StyledSpinner>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledSpinner>
        </SpinnerWrapper>
    )
}

export default Spinner;