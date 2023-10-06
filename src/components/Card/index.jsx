import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardMain() {
    return (
        <CardGroup>
            <Card>
                <Card.Img
                    variant="top"
                    src=""
                />
                <Card.Body>
                    <Card.Title>Texto</Card.Title>
                    <Card.Text>
                        texto.{" "}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Figure.Image
                                    width={50}
                                    height={100}
                                    align-items="center"
                                    src=""
                                />
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    target="_blank"
                                    href="https://bula.vercel.app/docs"
                                >
                                    Saiba Mais
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img
                    variant="top"
                    src=""
                />
                <Card.Body>
                    <Card.Title>Texto</Card.Title>
                    <Card.Text>
                       Texto.{" "}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Figure.Image
                                    width={50}
                                    height={100}
                                    align-items="center"
                                    src=""
                                />
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    target="_blank"
                                    href="https://bula.vercel.app/docs"
                                >
                                    Saiba Mais
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img
                    variant="top"
                    src=""
                />
                <Card.Body>
                    <Card.Title>Texto</Card.Title>
                    <Card.Text>
                        Texto.{" "}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Figure.Image
                                    width={50}
                                    height={100}
                                    align-items="center"
                                    src=""
                                />
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    target="_blank"
                                    href="https://bula.vercel.app/docs"
                                >
                                    Saiba Mais
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default CardMain;
