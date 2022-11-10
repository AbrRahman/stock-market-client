import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../component/serviceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <>
            <h1>This is home page</h1>

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