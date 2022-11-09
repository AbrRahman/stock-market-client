import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext/AuthContext';
const ServiceDetails = () => {
    const { user } = useContext(AuthProvider)
    console.log(user)
    const serviceDetails = useLoaderData();
    const { name, image, price, details, _id } = serviceDetails;
    const handelReview = (event) => {
        event.preventDefault()
        const from = event.target;
        const review = from.review.value;
        console.log(review);
        if (user && user.uid) {
            const reviewData = {
                serviceId: _id,
                serviceName: name,
                reviewerName: user.displayName,
                reviewerEmail: user.email,
                reviewerImage: user.phoneNumber,
                reviewMsg: review
            }
            fetch('http://localhost:8000/review', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                }).catch(err => {
                    console.log(err)
                })
        } else {
            toast.success('Please login to add a review')
        }
    }
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

            {/* section service review */}
            <section>
                <Container>
                    <h3 className='text-center py-4'>User Reviews</h3>
                    <ListGroup>
                        <ListGroup.Item className='mb-3'><div className='py-4'>
                            Dapibus ac facilisis in
                        </div>
                            <div className='d-flex align-items-center'>
                                <img className='me-2' src={image} alt="" style={{ height: '40px', width: '40px', borderRadius: "50%" }} />
                                <h6>Mr Ab rahman</h6>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    {/* review form */}
                    <div className='mt-4'>
                        <Form onSubmit={handelReview}>
                            <Form.Control
                                name='review'
                                as="textarea"
                                placeholder="Write a comment here"
                                style={{ height: '100px' }}
                            />
                            <Button className='mt-3' type='submit'>Add Review</Button>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ServiceDetails;