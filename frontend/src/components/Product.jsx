import { Card } from "react-bootstrap"; 
import React from 'react'

const Product = ({product}) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
        </a>

        <Card.Body>
        <a href={`/product/${product._id}`}>
        <Card.Title as="div">
            <strong>{product.name}</strong></Card.Title>
        </a>
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
