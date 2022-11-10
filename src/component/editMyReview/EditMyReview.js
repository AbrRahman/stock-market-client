import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
const EditMyReview = () => {
    const review = useLoaderData();
    const navigate = useNavigate()
    const handelUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const updateReview = form.newReview.value;
        console.log(updateReview);
        fetch(`http://localhost:8000/my-reviews/${review._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateValue: updateReview })
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Delete success')
                    navigate('/my-reviews')
                }
            })
    }
    return (
        <Container>
            <h3 className='text-center py-4'>Edit Review</h3>
            <Form onSubmit={handelUpdate} className='py-5' style={{ maxWidth: "600px" }}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" disabled defaultValue={review?.serviceName} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" defaultValue={review?.reviewMsg} name='newReview' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </Container>
    );
};

export default EditMyReview;