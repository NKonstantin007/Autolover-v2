import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom'
  
import SignInForm from './components/SignInForm';
import Slider from '../../components/Slider';
import {SignInWrapper, SignInText, SignInTitle} from './components/styles';
import Spinner from '../../components/Spinner';
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
                            <SignInForm onSubmit={onSignIn} />
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

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SignInContainer);