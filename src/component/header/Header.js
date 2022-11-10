import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext/AuthContext';
const Header = () => {
    const { logOut, user } = useContext(AuthProvider)
    console.log(user)
    const handelLogOut = () => {
        logOut()
            .then(() => {
                alert('LogOut success')
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Stock Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/service'>Service</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>

                            {
                                user && user?.uid ? <>
                                    <Nav.Link as={Link} to='/add-service'>Add Service</Nav.Link>
                                    <Nav.Link as={Link} to='/my-reviews'>My Reviews</Nav.Link>
                                    <Nav.Link onClick={handelLogOut}><Button>LogOut</Button></Nav.Link>
                                </> : <>
                                    <Nav.Link as={Link} to='/login'><Button>Login</Button></Nav.Link>
                                    <Nav.Link as={Link} to='/register'><Button>Register</Button></Nav.Link>
                                </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;