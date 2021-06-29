import React from 'react';
import Link from 'next/link'
import { Navbar, Container, Nav } from 'react-bootstrap';

export const CustomNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link href="/">
                    <Navbar.Brand role="button">
                        Nación E-Sports
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/leagues" passHref>
                            <Nav.Link>Grandes Torneos</Nav.Link>
                        </Link>
                        <Link href="/streaming" passHref>
                            <Nav.Link>Streaming</Nav.Link>
                        </Link>
                        <Link href="/store" passHref>
                            <Nav.Link>Tienda</Nav.Link>
                        </Link>
                        <Link href="/news" passHref>
                            <Nav.Link>Noticias</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
