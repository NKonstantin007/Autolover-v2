import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SignUpAnnouncement from './components/SignUpAnnouncement';
import SignUpForm from './components/SignUpForm';

const SignUpContainer = () => {
    return (
        <Container>
            <Row>
                <Col md="8" sm="6" xs="12">
                    <SignUpAnnouncement />
                </Col>
                <Col md="4" sm="6" xs="12">
                    <SignUpForm />
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpContainer;