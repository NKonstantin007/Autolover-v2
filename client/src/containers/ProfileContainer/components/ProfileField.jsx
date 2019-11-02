import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlexBlock from '../../../styles/components/FlexBlock';
import {LabelKey, LabelValue, 
    EditButton, ProfileFieldWrapper
} from './styles/ProfileField';
import Input from '../../../components/formElements/Input';
import {PencilIcon} from '../../../styles/icons';

class ProfileField extends Component {
    state = {
        isEdit: false
    };

    changeIsEdit = () => this.setState({isEdit: !this.state.isEdit});

    render() {
        const {input, meta, type, labelKey, readonly} = this.props;
        return (
            <ProfileFieldWrapper>
                <FlexBlock direction="row" justify="start" align="baseline"> 
                    <LabelKey>{labelKey}:</LabelKey>
                    { !this.state.isEdit && (<LabelValue>{input.value}</LabelValue>) }
                    { 
                        (this.state.isEdit && !readonly) &&  (
                            <Input input={input}  type={type} 
                                meta={meta} fontSize="big"
                                onBlurHandler={this.changeIsEdit}
                            />
                        ) 
                    }
                    {
                        (!this.state.isEdit && !readonly) && (
                            <EditButton 
                                color="primary" type="button" 
                                onClick={this.changeIsEdit}
                            >
                                <PencilIcon />
                            </EditButton>
                        )
                    }
                </FlexBlock>
            </ProfileFieldWrapper>
        );
    }
}

ProfileField.propTypes = {
    meta: PropTypes.shape({
        touched: PropTypes.bool.isRequired,
        error: PropTypes.string
    }).isRequired,
    type: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired
};

export default ProfileField;