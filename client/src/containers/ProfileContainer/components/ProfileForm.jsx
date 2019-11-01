import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import {reduxForm, Field} from 'redux-form';


import ProfileField from './ProfileField';
import Button from '../../../styles/components/Button';
import FlexBlock from '../../../styles/components/FlexBlock';
import {DownloadIcon} from '../../../styles/icons';
import FileInput from '../../../components/formElements/FileInput';

const ProfileForm = (props) => {
    const {
        handleSubmit,
        onUpdateAvatarCurrentUser
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col xs="12" md="5">
                        <FlexBlock direction="column" justify="start" align="center"> 
                            <img src="/images/avatar.png" alt="avatar" />
                            <FileInput
                                id="avatar-file-input"
                                downloadComponent={() => (<Button color="primary" type="button" ><DownloadIcon />Загрузить фото</Button>)}
                                onChange={onUpdateAvatarCurrentUser} 
                            />
                        </FlexBlock>
                    </Col>
                    <Col xs="12" md="7">
                        <Field name="name" type="text" component={ProfileField} labelKey="Имя"/>
                        <Field name="email" type="text" component={ProfileField} labelKey="Email"/>
                        <Field name="aboutMe" type="text" component={ProfileField} labelKey="О себе"/>
                        <Button color="primary" type="submit" >Сохранить</Button>
                    </Col>
                </Row>
            </Container>
        </form>
    );
}

export default reduxForm({
    form: 'ProfileForm'
})(ProfileForm);