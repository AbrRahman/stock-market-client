import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext/AuthContext';
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const { emailPasswordLogin, signUpWithGoogle } = useContext(AuthProvider)
    let from = location.state?.from?.pathname || "/";
    // handel google sing in 
    const handleGoogleLogin = () => {
        signUpWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success('Sign up add success')
                navigate(from, { replace: true });
            }).catch(err => {
                console.log(err.message)
            })
    }
    // handel email password login
    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        emailPasswordLogin(email, password)
            .then(result => {
                const user = result.user;
                toast.success('LogIn success')
                navigate(from, { replace: true });
            }).catch(err => {
                console.log(err.message)
            })
    }
    return (
        <Container className='mt-3'>
            <Helmet>
                <title>Stock Market-Login</title>
            </Helmet>
            <Row className=''>
                <Col lg={6} md={12}>
                    <div>
                        <img className='w-100' src='https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1667991662~exp=1667992262~hmac=60ef51c44fa7b4e10c1a045bfa898718956e0aad2293154635664ba7732e93f6' alt=''></img>
                    </div>
                </Col>
                <Col lg={6} md={12} className='p-3'>
                    <h3 className='text-center my-3'>LogIn now</h3>

                    <Form onSubmit={handelLogin} style={{ maxWidth: '500px' }}>
                        <Form.Group className="mb-2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <div className='mt-4'>
                            <Button variant="primary" className='me-2' type="submit">
                                Login
                            </Button>
                            <span className='mt-3 ms-2'>Don't have account? <Link to='/register'><small>Register</small></Link></span>
                            <br />
                            <Button onClick={handleGoogleLogin} variant='outline-primary' className='mt-3'>SignUp Width Google <FaGoogle></FaGoogle></Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;