import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { FaClock, FaCoins, FaUser } from 'react-icons/fa';
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
            {/* WHY CHOOSE US? section */}
            <section className=''>
                <Container className='my-4'>
                    <h3 className='text-center my-3'>WHY CHOOSE US?</h3>
                    <Row className=''>
                        <Col lg={4} className='bg-light'>
                            <div className='d-flex justify-content-center mt-3'><FaUser style={{ width: "70px", height: "70px" }}></FaUser></div>
                            <div className='p-4 text-center'>
                                <h5>Professional Handyman</h5>
                                <p>A handyman provides a broad range of skills and services involving basic repairs maintenance tasks, and other do-it-yourself projects. These assignments can be ...</p>
                            </div>
                        </Col>
                        <Col lg={4} className='bg-light'>
                            <div className='d-flex justify-content-center mt-3'><FaCoins style={{ width: "70px", height: "70px" }}></FaCoins></div>
                            <div className='p-4 text-center'>
                                <h5>Affordable Price</h5>
                                <p>f something is affordable, it means its price is low enough that you (or most people) have enough money to buy it.</p>
                            </div>
                        </Col>
                        <Col lg={4} className='bg-light'>
                            <div className='d-flex justify-content-center mt-3'><FaClock style={{ width: "70px", height: "70px" }}></FaClock></div>
                            <div className='p-4 text-center'>
                                <h5>24/7 Services</h5>
                                <p>In commerce and industry, 24/7 or 24-7 service usually pronounced "twenty-four seven" is service that is available at any time and usually, every day</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;