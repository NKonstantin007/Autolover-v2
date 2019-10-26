import React from 'react';
import {reduxForm} from 'redux-form';
import {Container, Row, Col} from 'reactstrap'

import {ProfileWrapper} from './components/styles';

const ProfileContainer = () => {
    return (
        <ProfileWrapper>
            <Container>
                <Row>
                    <Col xs="12" md="5">
                        <img src="/images/avatar.png" alt="avatar" />
                    </Col>
                    <Col xs="12" md="7">
                        User info
                    </Col>
                </Row>
            </Container>
        </ProfileWrapper>
    );
}

export default reduxForm({
    form: 'ProfileForm'
})(ProfileContainer);