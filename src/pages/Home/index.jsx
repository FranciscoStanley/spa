import React from "react";
import Stack from "react-bootstrap/Stack";
import Header from "../../components/Header";
import CardMain from "../../components/Card";

function Home() {
    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <h1 className="tilteText">Consulta medicamentos</h1>
            <Header />
            <CardMain />
        </Stack>
    );
}

export default Home;
