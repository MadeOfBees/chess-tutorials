import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition = "rnbqkbnr/pppppppp/8/8/7/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";


const Puzzle = () => {
    return (
        <div>
            <h1>Advanced Lesson 3:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis
                        , libero sit amet sodales finibus, dui quam accumsan augue, non pulvinar odio
                        magna id felis. Cras pulvinar, magna eu pharetra sagittis, nisi metus bibendum
                        elit, sit amet mollis lectus erat sit amet odio. Integer et porttitor dolor,
                        ut mattis massa. Donec dignissim, lacus dapibus sollicitudin imperdiet, odio
                        neque eleifend diam, et cursus turpis felis id lorem. Vivamus vitae erat urna.
                        Donec eu scelerisque sem. In ultrices a odio at interdum. Donec ac dictum ipsum,
                        eu tristique lorem. Vivamus sodales pulvinar lectus non fermentum. Cras interdum
                        ultricies elementum. Phasellus ut nibh laoreet, finibus leo et, maximus
                        mauris. Integer id eleifend mauris, in feugiat massa. Curabitur vitae felis
                        ut ante condimentum pellentesque a pharetra justo. Ut vel neque vitae
                        magna volutpat luctus nec quis augue. Pellentesque metus odio, egestas
                        ut tempus ut, mattis nec ante. Aenean pellentesque leo eu sapien pharetra,
                        ac suscipit neque eleifend. </p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
