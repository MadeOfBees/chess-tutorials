import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Chessboard() {
    return (
        <div>
            <Row>
                <Col>
                    <Row>
                        <Col className='boardSpace e1m1 allWork'></Col>
                        <Col className='boardSpace e2m1 noPlay'></Col>
                        <Col className='boardSpace e3m1 allWork'></Col>
                        <Col className='boardSpace e4m1 noPlay'></Col>
                        <Col className='boardSpace e5m1 allWork'></Col>
                        <Col className='boardSpace e6m1 noPlay'></Col>
                        <Col className='boardSpace e7m1 allWork'></Col>
                        <Col className='boardSpace e8m1 noPlay'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m2 noPlay'></Col>
                        <Col className='boardSpace e2m2 allWork'></Col>
                        <Col className='boardSpace e3m2 noPlay'></Col>
                        <Col className='boardSpace e4m2 allWork'></Col>
                        <Col className='boardSpace e5m2 noPlay'></Col>
                        <Col className='boardSpace e6m2 allWork'></Col>
                        <Col className='boardSpace e7m2 noPlay'></Col>
                        <Col className='boardSpace e8m2 allWork'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m3 allWork'></Col>
                        <Col className='boardSpace e2m3 noPlay'></Col>
                        <Col className='boardSpace e3m3 allWork'></Col>
                        <Col className='boardSpace e4m3 noPlay'></Col>
                        <Col className='boardSpace e5m3 allWork'></Col>
                        <Col className='boardSpace e6m3 noPlay'></Col>
                        <Col className='boardSpace e7m3 allWork'></Col>
                        <Col className='boardSpace e8m3 noPlay'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m4 noPlay'></Col>
                        <Col className='boardSpace e2m4 allWork'></Col>
                        <Col className='boardSpace e3m4 noPlay'></Col>
                        <Col className='boardSpace e4m4 allWork'></Col>
                        <Col className='boardSpace e5m4 noPlay'></Col>
                        <Col className='boardSpace e6m4 allWork'></Col>
                        <Col className='boardSpace e7m4 noPlay'></Col>
                        <Col className='boardSpace e8m4 allWork'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m5 allWork'></Col>
                        <Col className='boardSpace e2m5 noPlay'></Col>
                        <Col className='boardSpace e3m5 allWork'></Col>
                        <Col className='boardSpace e4m5 noPlay'></Col>
                        <Col className='boardSpace e5m5 allWork'></Col>
                        <Col className='boardSpace e6m5 noPlay'></Col>
                        <Col className='boardSpace e7m5 allWork'></Col>
                        <Col className='boardSpace e8m5 noPlay'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m6 noPlay'></Col>
                        <Col className='boardSpace e2m6 allWork'></Col>
                        <Col className='boardSpace e3m6 noPlay'></Col>
                        <Col className='boardSpace e4m6 allWork'></Col>
                        <Col className='boardSpace e5m6 noPlay'></Col>
                        <Col className='boardSpace e6m6 allWork'></Col>
                        <Col className='boardSpace e7m6 noPlay'></Col>
                        <Col className='boardSpace e8m6 allWork'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m7 allWork'></Col>
                        <Col className='boardSpace e2m7 noPlay'></Col>
                        <Col className='boardSpace e3m7 allWork'></Col>
                        <Col className='boardSpace e4m7 noPlay'></Col>
                        <Col className='boardSpace e5m7 allWork'></Col>
                        <Col className='boardSpace e6m7 noPlay'></Col>
                        <Col className='boardSpace e7m7 allWork'></Col>
                        <Col className='boardSpace e8m7 noPlay'></Col>
                    </Row>
                    <Row>
                        <Col className='boardSpace e1m8 noPlay'></Col>
                        <Col className='boardSpace e2m8 allWork'></Col>
                        <Col className='boardSpace e3m8 noPlay'></Col>
                        <Col className='boardSpace e4m8 allWork'></Col>
                        <Col className='boardSpace e5m8 noPlay'></Col>
                        <Col className='boardSpace e6m8 allWork'></Col>
                        <Col className='boardSpace e7m8 noPlay'></Col>
                        <Col className='boardSpace e8m8 allWork'></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Chessboard;
