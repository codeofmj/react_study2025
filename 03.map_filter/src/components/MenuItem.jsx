import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//info.id
const MenuItem = ({info}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={info.img} alt={info.name}/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          {info.price}
        </Card.Text>
        <Button variant="primary">주문하기</Button>
      </Card.Body>
    </Card>
  )
}

export default MenuItem