import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom'
  
import SignInForm from './components/SignInForm';
import {SignInWrapper, SignInText, SignInTitle} from './components/styles';
import {fetchSignIn} from './redux/actions';

const SignInContainer = (props) => {

    const onSignIn = async (user) => {
        const {history} = props;
        try {
            await props.fetchSignIn(user, history);

        }   
        catch(e) {
            console.log(e);
        }
    }

    return (
        <SignInWrapper>
            <Container>
                <Row>
                    <Col md={{size: 4, offset: 4}} sm={{size: 6, offset: 3}} xs={{size: 10, offset: 1}}>
                        <SignInTitle>Авторизация</SignInTitle>
                        <SignInText>Войдите используя свой email и пароль</SignInText>
                        <SignInForm onSubmit={onSignIn} />
                    </Col>
                </Row>
            </Container>
        </SignInWrapper>
    );
}

const mapDispatchToProps = {
        fetchSignIn
};

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(SignInContainer);