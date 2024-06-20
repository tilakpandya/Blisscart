import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


export default function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded' style={{ width: '300px', height: '435px' }}>
    <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} style={{ objectFit: 'cover', width: '100%'}} />
    </Link>

    <Card.Body style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Title as="div" style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                <strong>{product.name}</strong>
            </Card.Title>
        </Link>

        <Card.Text as="div" style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            <div className='my-3'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            </div>
        </Card.Text>

        <Card.Text as="h3" style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            ${product.price}
        </Card.Text>
    </Card.Body>
</Card>

  )
}
