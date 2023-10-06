import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchInput from "../Search";

function Header() {
    const [show, setshow] = useState(false);
    const handleshow = () => setshow(!show);

    return (
        <Navbar data-bs-theme="dark">
            <SearchInput show={show} handleshow={handleshow} />
            <Container className="Container">
                <Nav className="me-auto">
                    <FaSearch
                        className="Search"
                        size={30}
                        onClick={() => {
                            handleshow();
                        }}
                    />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
