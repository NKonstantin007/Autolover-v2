import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';


import ProfileField from './ProfileField';
import Button from '../../../styles/components/Button';
import FlexBlock from '../../../styles/components/FlexBlock';
import {DownloadIcon} from '../../../styles/icons';
import FileInput from '../../../components/formElements/FileInput';
import {StyledAvatar} from './styles/ProfileForm';
import Image from '../../../components/Image';


let ProfileForm = (props) => {
    const {
        handleSubmit,
        onUpdateAvatarCurrentUser,
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
                        <Field name="email" type="text" component={ProfileField} labelKey="Email"/>
                        <Field name="aboutMe" type="text" component={ProfileField} labelKey="О себе"/>
                        <Button color="primary" type="submit" >Сохранить</Button>
                    </Col>
                </Row>
            </Container>
        </form>
    );
}

ProfileForm =  reduxForm({
    form: 'ProfileForm'
})(ProfileForm);

const selector = formValueSelector('ProfileForm');
const mapStateToProps = (state) => {
    const avatar = selector(state, 'avatar');
    return {
        avatar
    };
};

export default connect(mapStateToProps)(ProfileForm)
