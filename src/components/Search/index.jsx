import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Details from "../Detail/index";
import useDebounce from "../../hooks/useDebounce";
import { searchMedicine } from "../../repository/index";

function SearchInput({ show, handleshow }) {
    const [medicine, setMedicine] = useState("");
    const [medicines, setMedicines] = useState([]);

    async function onChangeMedicine(value) {
        const res = await searchMedicine(value);
        setMedicines(res.data.content);
    }

    const debounceChange = useDebounce(onChangeMedicine, 100);

    const handleChange = (e) => {
        e.preventDefault();
        setMedicine(e.target.value);

        if (e.target.value === undefined || e.target.value === "") {
            setMedicines([]);
        } else {
            debounceChange(e.target.value);
        }
    };

    return (
        <Modal show={show} onHide={handleshow}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4 className="title-h4">Pesquisar Medicamentos</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>
                            <p className="paragraph">Nome do Medicamento</p>
                        </Form.Label>
                        <Form.Control
                            value={medicine}
                            onChange={handleChange}
                            type="search"
                            placeholder="Insira o nome do medicamento"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
                <Card style={{ width: "100%" }}>
                    <ListGroup variant="flush">
                        {medicines.map((remedy) => (
                            <ListGroup.Item key={remedy.idProduto}>
                                <div className="list-remedy">
                                    <Details remedy={remedy} />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </Modal.Body>
            <Modal.Footer />
        </Modal>
    );
}

export default SearchInput;
