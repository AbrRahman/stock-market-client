import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Blog = () => {
    return (
        <Container className='my-4'>
            <Row className='g-4'>
                <Col sm={12} md={6} lg={6}>
                    <div className='p-4'>
                        <h3>1. Difference between SQL and NoSQL </h3>
                        <p>
                            SQL is the programming language used to interface with relational databases.
                            Relational databases model data as records in rows and tables with logical
                            links between them. NoSQL is a class of DBMs that are non-relational and generally
                            do not use SQL.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='p-4'>
                        <h3>2. What is JWT, and how does it work?</h3>
                        <p>The purpose of using JWT is not to hide data but to ensure the authenticity of
                            the data. JWT is signed and encoded, not encrypted.
                            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless
                            session, server doesn't have to completely rely on a datastore database to save session information.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='p-4'>
                        <h3>3. What is the difference between javascript and NodeJS?</h3>
                        <p>JavaScript is a simple programming language that can be used with any browser
                            that has the JavaScript Engine installed. Node.
                            js, on the other hand, is an interpreter or execution environment
                            for the JavaScript programming language.</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <div className='p-4'>
                        <h3>4. How does NodeJS handle multiple requests at the same time?</h3>
                        <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places
                            them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has
                            its own EventLoop which is an infinite loop that receives requests and processes them</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;