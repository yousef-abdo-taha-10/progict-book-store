
import './navbar.css';

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const NavigationBar = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.searchInput.value;
        console.log('بحث عن:', query);
        // ضيف كود البحث الخاص بك هنا
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Container>
                <Navbar.Brand href="#home">MyLibrary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto">
                        <Nav.Link href="#books">كتب</Nav.Link>
                        <Nav.Link href="#novels">روايات</Nav.Link>
                        <Nav.Link href="#login">تسجيل الدخول</Nav.Link>
                        <Nav.Link href="#signup">تسجيل حساب</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={handleSearch} className="ml-auto">
                        <FormControl
                            type="text"
                            placeholder="ابحث عن كتاب أو رواية..."
                            name="searchInput"
                            className="mr-sm-2"
                        />
                        <Button type="submit" variant="outline-light">بحث</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
