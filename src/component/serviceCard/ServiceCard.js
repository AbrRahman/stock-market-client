import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { name, image, price, details, _id } = service;
    return (
        <Col>
            <Card>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <Card.Img variant="top" className='w-100' style={{ maxHeight: "262px", cursor: "pointer" }} src={image} />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.length > 100 ? details.slice(0, 100) + "..." : details}
                    </Card.Text>
                    <h4 className='text-warning '>Price : {price}$</h4>
                </Card.Body>
                <Card.Footer className=''>
                    <Link to={`/service/${_id}`}> <Button className='btn-sm'>Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServiceCard;