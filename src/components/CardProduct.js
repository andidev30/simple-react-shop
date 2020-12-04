import { Card, Button } from "react-bootstrap";

export default function CardProduct({ data, handleAddToCart }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/random"
          height="200"
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle>{data.price}</Card.Subtitle>
          <br />
          <Card.Text>{data.description}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
