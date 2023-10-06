import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Leaflet from "../Leaflet";
import { detailsMedicine } from "../../repository";

function Details({ remedy }) {
    const [details, setDetails] = useState({});

    useEffect(() => {
        (async () => {
            const res = await detailsMedicine(remedy.numProcesso);
            setDetails(res.data);
        })();
    }, [remedy]);

    return (
        <Accordion alwaysOpen={false}>
            <Accordion.Item eventKey={remedy.idProduto}>
                <Accordion.Header>
                    {remedy.nomeProduto} - {remedy.razaoSocial}
                </Accordion.Header>
                <Accordion.Body>
                    {remedy.razaoSocial}
                    <section>{details.classeTerapeutica}</section>
                    <section>{details.principioAtivo}</section>
                    <section>{details.medicamentoReferencia}</section>
                    <section>{details.categoriaRegulatoria}</section>
                    <section>{details.empresa?.razaoSocial}</section>
                    <Leaflet pdf={remedy.idBulaPacienteProtegido} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Details;
