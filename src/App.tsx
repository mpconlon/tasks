import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import bunny from "./yippie.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{
                width: "2px solid red",
                height: "2px solid red",
                backgroundColor: "red"
            }}
        >
            <header className="App-header">
                UD CISC275 App - Matthew Conlon
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <h1>the app ever</h1>
            Cereals:
            <ul>
                <li>Cinnamon Toast Crunch</li>
                <li>Raisin Bran</li>
                <li>Honey Nut Cheerios</li>
            </ul>
            <Container>
                <Row>
                    <Col>Column 1</Col>
                    <Col>
                        Column 2, contains this image: <br />
                        <img src={bunny} alt="silly picture of bunny :)" />
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Hello World!</p>
        </div>
    );
}

export default App;
