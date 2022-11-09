import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, image, price, details } = serviceDetails;
    return (
        <>
            {/* service details section */}
            <section className='my-5'>
                <Container>
                    <h3 className='text-center py-4'>Service Details</h3>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <img className='w-100' src={image} alt=''></img>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className='p-4'>
                                <h2>{name}</h2>
                                <p>{details}</p>
                                <h4>Price : {price}$</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ServiceDetails;