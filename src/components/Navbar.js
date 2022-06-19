import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { Container, Navbar, Form, Button, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavbarComponent(props) {
    const [search, setSearch] = useState('')

    const textColor = {
        color: 'white',
        textDecoration: 'none',
        margin: 'auto',
        padding: '5px 10px'
    };
    const logoColor = {
        color: '#62c1ad',
        textDecoration: 'none'
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.history.push(`/search/${search}`);
    };

    const handleChange = (e) => {
        setSearch(e.target.value)
    };

    return (<>
        <Navbar collapseOnSelect expand="lg" sticky='top' style={{ backgroundColor: '#333333' }} variant="dark" className='py-1 px-3'>
            <Container fluid >
                <Link to="/" style={logoColor} className="navbar-brand logo" >LoFo</Link>
                <Navbar.Toggle className='non-outlined-btn' />
                <Navbar.Collapse >
                    <Nav className="me-auto">
                        <Nav.Link eventKey='1' as={Link} style={textColor} to="/" >Home</Nav.Link><hr className='m-1 text-light' />
                        <Nav.Link eventKey='5' as={Link} style={textColor} to="/lost-found">Lost/Found</Nav.Link><hr className='m-1 text-light' />
                        <Nav.Link eventKey='2' as={Link} style={textColor} to="/sell"  >Sell</Nav.Link><hr className='m-1 text-light' />
                        <Dropdown id="collasible-nav-dropdown">
                            <Dropdown.Toggle className='non-outlined-btn btn-warning w-100' >Buy</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey='6' as={Link} to="/buy/All">All</Dropdown.Item>
                                <Dropdown.Item eventKey='7' as={Link} to="/buy/Sports">Sports</Dropdown.Item>
                                <Dropdown.Item eventKey='8' as={Link} to="/buy/Books">Books</Dropdown.Item>
                                <Dropdown.Item eventKey='9' as={Link} to="/buy/Games">Games</Dropdown.Item>
                                <Dropdown.Item eventKey='10' as={Link} to="/buy/Utilities">Utilities</Dropdown.Item>
                                <NavDropdown.Divider />
                                <Dropdown.Item eventKey='11' as={Link} to="/buy/Other">Others</Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown><hr className='m-1 text-light' />

                    </Nav>
                    <Form className="d-flex search-bar m-auto" onSubmit={handleSubmit} >
                        <Form.Control autoCapitalize="sentences" onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Nav.Link eventKey='17' as={Button} variant='transparent' className='text-light' size='sm' type="submit"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                    </Form><hr className='m-1 text-light' />


                    <Nav className='ms-auto' >
                        <Nav.Link eventKey='3' as={Link} style={textColor} to="/about">About</Nav.Link><hr className='m-1 text-light' />
                        <Nav.Link eventKey='4' as={Link} style={textColor} to="/contact">Contact</Nav.Link><hr className='m-1 text-light' />
                        <ProfileButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <script src="../scripts/collapse.js"></script>

    </>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.Authorised,
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarComponent));
