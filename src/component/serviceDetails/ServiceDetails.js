import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext/AuthContext';
const ServiceDetails = () => {
    const [userReview, setUserReview] = useState()
    const { user } = useContext(AuthProvider)
    console.log(user)
    const serviceDetails = useLoaderData();
    const { name, image, price, details, _id } = serviceDetails;
    console.log(userReview)
    // add review data
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
                    const { result, reviewDoc } = data;
                    if (result.acknowledged) {
                        toast.success('Review add success')
                        let newReview = [...userReview, reviewData]
                        setUserReview(newReview)
                    }
                }).catch(err => {
                    console.log(err)
                })
        } else {
            toast.success('Please login to add a review')
        }
    }
    // get Usr review data
    useEffect(() => {
        fetch(`http://localhost:8000/review/${_id}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])
    return (
        <>
            {/* service details section */}
            <section className='my-5'>
                <Helmet>
                    <title>Stock Market-Service Details</title>
                </Helmet>
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
            <section className='mb-5'>
                <Container>
                    <h3 className='text-center py-4'>User Reviews</h3>
                    {
                        userReview?.map(review => <ListGroup key={review._id}>
                            <ListGroup.Item className='mb-3'><div className='py-4'>
                                {review.reviewMsg}
                            </div>
                                <div className='d-flex align-items-center'>
                                    <img className='me-2' src={review.reviewerImage} alt="" style={{ height: '40px', width: '40px', borderRadius: "50%" }} />
                                    <h6>{review.reviewerName}</h6>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>)
                    }

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