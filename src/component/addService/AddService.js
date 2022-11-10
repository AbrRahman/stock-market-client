import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
const AddService = () => {
    const addService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const photoUrl = form.photoUrl.value;
        const price = form.price.value;
        const details = form.details.value;
        const serviceData = {
            name: serviceName,
            image: photoUrl,
            price: price,
            details: details
        }
        fetch('https://stock-market-server.vercel.app/service', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service add success')
                }
            })
        console.log(serviceName, photoUrl, price, details)
    }
    return (
        <Container className='my-5'>
            <h3 className='text-center py-4'>Add Services</h3>
            <Form onSubmit={addService} style={{ maxWidth: '800px' }}>
                <Form.Group className="mb-2" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter service name" />
                </Form.Group>
                <Form.Group className="mb-2" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoUrl' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Enter price</Form.Label>
                    <Form.Control type="text" name='price' placeholder="Enter service price" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Service Details</Form.Label>
                    <Form.Control type="text" name='details' placeholder="Enter service details" />
                </Form.Group>
                <div className='mt-4'>
                    <Button variant="primary" className='me-2' type="submit">
                        Add service
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddService;