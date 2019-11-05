import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';


import ProfileField from './ProfileField';
import Button from '../../../styles/components/Button';
import FlexBlock from '../../../styles/components/FlexBlock';
import {DownloadIcon} from '../../../styles/icons';
import FileInput from '../../../components/formElements/FileInput';
import {StyledAvatar, ButtonSection} from './styles/ProfileForm';
import Image from '../../../components/Image';
import {PencilIcon} from '../../../styles/icons';

const validate = (values) => {
    const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters
    const errors = {}
    //--- Name check ---
    // check name for emptiness
    if (!values.name) {
        errors.name = 'Введите имя';
    }
    // check name for emptiness with space
    else if (values.name.trim() === '') {
        errors.name = 'Введите имя';
    }
    // check name max length 
    else if (values.name.length > 20) {
    errors.name = 'Длина имени должна быть не более 20 символов';
    }
    // check name for compliance with the pattern
    else if(charactersPattern.test(values.name.trim())) {
        errors.name='Имя содержит недопустимые символы';
    }
    return errors;
}


let ProfileForm = (props) => {
    const {
        handleSubmit,
        onUpdateAvatarCurrentUser,
        onUpdatePasswordCurrentUser,
        avatar
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col xs="12" md="5">
                        <FlexBlock direction="column" justify="start" align="center"> 
                            <StyledAvatar>
                                <Image src={avatar} defaultSrc="/images/avatar.png" />
                            </StyledAvatar>
                            <FileInput
                                id="avatar-file-input"
                                downloadComponent={() => (<Button color="primary" type="button" ><DownloadIcon />Загрузить фото</Button>)}
                                onChange={onUpdateAvatarCurrentUser} 
                            />
                        </FlexBlock>
                    </Col>
                    <Col xs="12" md="7">
                        <Field name="name" type="text" component={ProfileField} labelKey="Имя"/>
                        <Field name="aboutMe" type="text" component={ProfileField} labelKey="О себе"/>
                        <Field name="email" type="text" component={ProfileField} labelKey="Email" readonly />
                        <ButtonSection>
                            <Button color="primary" type="submit">Сохранить</Button>
                            <Button 
                                color="primary" type="button" onClick={onUpdatePasswordCurrentUser}
                            >
                                <PencilIcon />Изменить пароль
                            </Button>
                        </ButtonSection>
                    </Col>
                </Row>
            </Container>
        </form>
    );
}

ProfileForm =  reduxForm({
    form: 'ProfileForm',
    validate
})(ProfileForm);

const selector = formValueSelector('ProfileForm');
const mapStateToProps = (state) => {
    const avatar = selector(state, 'avatar');
    return {
        avatar
    };
};

export default connect(mapStateToProps)(ProfileForm)
