/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import RowBootstrap from "react-bootstrap/Row";
import ColBootstrap from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <Row className="flex-row">
          <Col xs="12" lg="12" className="order-lg-2 mb-3">
            <div className="home-carousel">
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
        </Row>
        <Row className="homepage pt-150">
          <div className="featured-tickets">
            <h1>POPULAR</h1>
            <Container>
              <RowBootstrap style={{ textAlign: "center" }}>
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b1b09a2-cb46-487c-9882-38dc63661db6/air-force-1-gtx-mens-shoes-MXf3Lm.png"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Airforce One</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="/product/airforce-one">USD 15</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="http://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-5.jpg"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Iphone 14</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="product/iphone-14">USD 1500</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://i.rtings.com/assets/products/O8bV3ILw/sony-x90k/design-medium.jpg"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>32 Inch Samsung TV</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="/product/32-inch-samsung-tv"> USD 120</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
              </RowBootstrap>
              <br />
              <RowBootstrap style={{ textAlign: "center" }}>
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b1b09a2-cb46-487c-9882-38dc63661db6/air-force-1-gtx-mens-shoes-MXf3Lm.png"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Airforce One</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="/product/airforce-one">USD 15</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="http://optitech.co.zw/wp-content/uploads/2022/09/apple-iphone-14-pro-max-5.jpg"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Iphone 14</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="product/iphone-14">USD 1500</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://i.rtings.com/assets/products/O8bV3ILw/sony-x90k/design-medium.jpg"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>32 Inch Samsung TV</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="/product/32-inch-samsung-tv"> USD 120</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
              </RowBootstrap>
            </Container>
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
