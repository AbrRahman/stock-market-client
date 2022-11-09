import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, image, price, details, _id } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" className='w-100' style={{ maxHeight: "262px" }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.length > 100 ? details.slice(0, 100) + "..." : details}
                    </Card.Text>
                    <h4 className='text-warning '>{price} $</h4>
                </Card.Body>
                <Card.Footer className=''>
                    <Link to={`/service/:${_id}`}> <Button className='btn-sm'>Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServiceCard;