import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../serviceCard/ServiceCard';
const Service = () => {
    const services = useLoaderData();
    return (
        <Container className='my-4'>
            <Helmet>
                <title>Stock Market-Service</title>
            </Helmet>
            <h3 className='text-center py-4'>Our Service</h3>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default Service;