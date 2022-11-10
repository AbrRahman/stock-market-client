import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/serviceCard/ServiceCard';
import './Home.css';
const Home = () => {
    const services = useLoaderData();
    return (
        <>
            {/* set page title */}
            <Helmet>
                <title>Stock Market-Home</title>
            </Helmet>
            <section className='home-top-banner d-flex align-items-center justify-content-center'>
                <h1 className='text-white mb-3'>Online service saves time and money </h1>
            </section>
            {/* our service section */}
            <section>
                <Container className='my-4'>
                    <h3 className='text-center py-4'>Our Service</h3>
                    <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                        {
                            services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </Row>
                    <div className='text-center my-4'>
                        <Link to='/service'><Button>View all</Button></Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;