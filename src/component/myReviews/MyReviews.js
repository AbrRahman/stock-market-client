import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext/AuthContext';
const MyReviews = () => {
    const { user } = useContext(AuthProvider);
    const [myReviews, setMyReviews] = useState([])
    const email = user?.email;

    // delete service
    const handelDeleteReview = (id) => {
        if (window.confirm('Are you sure delete')) {
            fetch(`https://stock-market-server.vercel.app/my-reviews/${id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        let newReview = myReviews.filter(review => review._id !== id)
                        setMyReviews([...newReview])
                        toast.success('Delete success')
                    }
                })
        }
    }
    // Load review data
    useEffect(() => {
        fetch('https://stock-market-server.vercel.app/my-reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ email })
        }).then(res => res.json())
            .then(data => setMyReviews(data))
    }, [email])
    return (
        <Container className='my-4'>
            <h3 className='text-center py-4'>My Reviews</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Service Review</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myReviews?.map(review => <tr key={review._id}>
                            <td>{review.serviceName}</td>
                            <td>{review.reviewMsg}</td>
                            <td><Link to={`/my-reviews/${review._id}`}><Button>Edit</Button></Link></td>
                            <td><Button onClick={() => handelDeleteReview(review._id)} variant='danger'>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default MyReviews;