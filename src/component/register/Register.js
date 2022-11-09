import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <Container className='mt-3'>

            <Row className=''>
                <Col lg={6} md={12}>
                    <div>
                        <img className='w-100' src='https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?w=740&t=st=1667976043~exp=1667976643~hmac=5cfbab8b6bf21ab4efc7e4ba2dc38be2a90e0ce510934026fd4cb92ac7b133dc' alt=''></img>
                    </div>
                </Col>
                <Col lg={6} md={12} className='p-3'>
                    <h3 className='text-center my-3'>Register now</h3>

                    <Form style={{ maxWidth: '500px' }}>
                        <Form.Group className="mb-2" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPhotoUrl">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photoUrl' placeholder="Photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <div className='mt-4'>
                            <Button variant="primary" className='me-2' type="submit">
                                Submit
                            </Button>
                            <span className='mt-3 ms-2'>Already have account? <Link to='/login'><small>Login</small></Link></span>
                            <br />
                            <Button variant='outline-primary' className='mt-3'>SignUp Width Google</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;