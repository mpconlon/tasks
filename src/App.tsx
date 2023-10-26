import React from "react";
import "./App.css";
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
                        Column 2, contains this image:
                        <img
                            src="./yippie.PNG"
                            alt="A funny low quality image of bunny :)"
                        />
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
