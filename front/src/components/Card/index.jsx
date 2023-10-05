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
                    src="https://www.medware.com.br/wp-content/uploads/2022/08/mdl-laudos-flex.png"
                />
                <Card.Body>
                    <Card.Title>Medware Laudos Flex</Card.Title>
                    <Card.Text>
                        O Medware Laudos Flex é um software para produção e
                        personalização de laudos médicos.{" "}
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
                                    src="https://www.medware.com.br/wp-content/uploads/2022/08/laudos-flex-escura.png"
                                />
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    href="http://laudosflex.medware.com.br/"
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
                    src="https://www.medware.com.br/wp-content/uploads/2022/08/capa-dicom.png"
                />
                <Card.Body>
                    <Card.Title>Medware comDICOM</Card.Title>
                    <Card.Text>
                        Quando o assunto é facilitar e poupar tempo, o Dicom é a
                        solução ideal. Menos trabalho e mais imagens de
                        qualidade.{" "}
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
                                    src="https://www.medware.com.br/wp-content/uploads/2022/08/dicom-escura.png"
                                />
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    href="http://dicom.medware.com.br/"
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
                    src="https://www.medware.com.br/wp-content/uploads/2022/08/img-linklaudo.png"
                />
                <Card.Body>
                    <Card.Title>Medware Link Laudo</Card.Title>
                    <Card.Text>
                        O LinkLaudo é um sistema 100% Web que disponibiliza no
                        seu site os resultados de exames para o seus pacientes.{" "}
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
                                    src="https://www.medware.com.br/wp-content/uploads/2022/08/linklaudo-escura.png"
                                />
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    href="https://medwarelinklaudo.medware.com.br/"
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
