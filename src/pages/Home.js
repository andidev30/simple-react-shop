import { Container, Row, Col, CardColumns } from "react-bootstrap";

import CardProduct from "../components/CardProduct";

export default function Home({ dataProducts, handleAddToCart }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h4>Home Page</h4>
          </Col>
        </Row>
        <Container>
          <div className="page-products" style={{ marginTop: "25px" }}>
            <CardColumns>
              {dataProducts.map((data) => (
                <CardProduct data={data} handleAddToCart={handleAddToCart} />
              ))}
            </CardColumns>
          </div>
        </Container>
      </Container>
    </>
  );
}
