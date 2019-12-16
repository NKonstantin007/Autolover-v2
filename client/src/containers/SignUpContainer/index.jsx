import React from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import SignUpAnnouncement from './components/SignUpAnnouncement';
import Slider from '../../components/Slider';
import SignUpForm from './containers/SignUpForm';
import {fetchSignUp} from './redux/actions';


const SignUpContainer = (props) => {
    const onSignUp = async (user) => {
        await props.fetchSignUp(user);
    }

    return (
        <React.Fragment>
            <Slider />
            <Container>
                <Row>
                    <Col md="8" sm="6" xs="12">
                        <SignUpAnnouncement />
                    </Col>
                    <Col md="4" sm="6" xs="12">
                        <SignUpForm onSubmit={onSignUp}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    fetchSignUp
}

export default connect(null, mapDispatchToProps)(SignUpContainer);