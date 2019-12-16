import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
  
import SignInForm from './containers/SignInForm';
import Slider from '../../components/Slider';
import {SignInWrapper, SignInText, SignInTitle} from './style';
import Spinner from '../../components/Spinner';
import {fetchSignIn} from './redux/actions';

const SignInContainer = (props) => {
    const handleSignIn = async (user) => {
        await props.fetchSignIn(user);
    }

    return (
        <React.Fragment>
            <Slider />
            <SignInWrapper>
                <Container>
                    <Row>
                        <Col md={{size: 4, offset: 4}} sm={{size: 6, offset: 3}} xs={{size: 10, offset: 1}}>
                            {
                                props.isFetching && <Spinner />
                            }
                            <SignInTitle>Авторизация</SignInTitle>
                            <SignInText>Войдите используя свой email и пароль</SignInText>
                            <SignInForm onSubmit={handleSignIn} />
                        </Col>
                    </Row>
                </Container>
            </SignInWrapper>
        </React.Fragment>
    );
}

const mapStateToProps = ({signIn}) => {
    return {
        isFetching: signIn.isFetching
    };
}

const mapDispatchToProps = {
    fetchSignIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);