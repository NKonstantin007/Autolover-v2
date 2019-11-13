import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'

import {Styled404, ErrorText, ErrorImage} from './styles/PageNotFound';
 

const PageNotFound = () => {
    return (
        <Container>
            <Row>
                <Col lg="6">
                    <Styled404>404</Styled404>
                    <ErrorText>
                        <p>Ошибка!</p> 
                        <p>К сожалению, запрашиваемая вами страница не найдена...</p>
                        <p>Вы можете перейти на <Link to="/">главную страницу</Link></p>
                    </ErrorText>
                </Col>
                <Col lg="6">
                    <ErrorImage src="/images/pageNotFound.png" alt="pageNotFound" />
                </Col>
            </Row>
        </Container>
    );
}

export default PageNotFound;