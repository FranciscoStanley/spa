import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FaFilePdf } from "react-icons/fa";
import { leafletDownload } from "../../repository";

function Leaflet({ pdf }) {
    const [linkPdf, setLinkPdf] = useState("");

    useEffect(() => {
        (async () => {
            const res = await leafletDownload(pdf);
            setLinkPdf(res.data.pdf);
        })();
    }, [pdf]);

    return (
        <div>
            <Button target="_blank" href={linkPdf}>
                <FaFilePdf size={24} />
                Download da Bula
            </Button>
        </div>
    );
}

export default Leaflet;
