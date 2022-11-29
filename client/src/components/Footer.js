import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function footer() {
    return (
        <footer className='neil'>
            <Row>
                <Col><p>Made by team 5 for project 3</p></Col>
                <Col>
                    <Row>
                    <Col><a href="https://github.com/Arjunk-g">Arjun's Github</a></Col>
                        <Col><a href="https://github.com/FinallyExonerated">Jordan's Github</a></Col>
                    </Row>
                    <Row>
                        <Col><a href="https://github.com/sensational11">Mack's Github</a></Col>
                        <Col><a href="https://github.com/MadeOfBees">Bee's Github</a></Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    );
}

export default footer;
