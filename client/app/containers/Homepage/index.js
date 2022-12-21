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
      <div className="homepage pt-150">
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Aahron.png"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Aahron</Card.Title>
                      <Card.Text>
                        Aahron loafer from Steve Madden, made with smooth
                        leather, patent leather, or velvet and an embellished
                        horsebit
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Alanandra.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Alanandra</Card.Title>
                      <Card.Text>
                        Stylish with a square toe and quilted detailing. Flat
                        sandals. Square open toe. Quilted details. Slip on
                        closure.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item
                        style={{ backgroundColor: "#a51f23", color: "white" }}
                      >
                        <Link to="product/iphone-14">USD 15</Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </ColBootstrap>
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Alessir.png"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Alessi-R</Card.Title>
                      <Card.Text>
                        Looking for the perfect shiny pump? Go for the Alessi-R!
                        This pump has a pointed toe covered with small
                        rhinestones
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Dallia.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Dallia</Card.Title>
                      <Card.Text>
                        Has regular styling, lace-up detail. Expand your shoe
                        collection with these comfy casual shoes. Heels. Square
                        toe. Slingback closure. Heel height: 10 CM.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Izzy.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Izzy</Card.Title>
                      <Card.Text>
                        Because every day is a loafer day, Featuring a classic
                        round toe and chunky lug sole, you just can't resist.
                        Chunky loafers. Round toe...
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Kelli.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Kelli</Card.Title>
                      <Card.Text>
                        These trendy heels are ready for dancing with a square
                        toe and flared heel. High heel sandals. Square toe.
                        Flared heel. Buckle closure.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Laurelle.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Laurelle</Card.Title>
                      <Card.Text>
                        The Laurelle high heels are classy with a twist.
                        Featuring a chic pointy toe, flared heel, and edgy
                        cutout detail. High heels. Pointy toe. Slip on.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Maryana.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Maryana</Card.Title>
                      <Card.Text>
                        Low-top slip-on sneakers. These babes are ready to make
                        a statement, featuring a big chain detail. Sneaker.
                        Round toe. Chain detail. Slip on closure.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Nataliar.png"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Natalia-R</Card.Title>
                      <Card.Text>
                        Stay classy with Steve Madden's Natalia-R. Featuring a
                        sleek stiletto heeland a strappy silhouette,perfect for
                        wearing with your go-to LBD. Heel height: 11cm.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Nicki.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Nicki</Card.Title>
                      <Card.Text>
                        We love the pointy closed toe, strappy detailing, and
                        stiletto heel. High heel. Pointy toe. Lace up closure.
                        Wrap detail. Heel height: 9.5 CM.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Nikerenew.png"
                    />
                    <Card.Body>
                      <Card.Title>Nike Renew Run 3</Card.Title>
                      <Card.Text>
                        Plush and stretchy, these shoes keep your feet stable
                        with every step and turn. Super-soft foam adds a
                        slightly springy feel for a little jump to your stride.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Nodoubt.png"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden No Doubt</Card.Title>
                      <Card.Text>
                        These dress sandals are crafted with a sleek leather-
                        look material and ankle fastening design that goes with
                        everything. Heel height: 7cm+.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Orea.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Orea</Card.Title>
                      <Card.Text>
                        A slight sparkle ensures these pumps make an entrance.
                        Flat Sandal. Round open toe. Rhinestone ornamentation.
                        Slip on closure.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Pumar78runnertrainers.png"
                    />
                    <Card.Body>
                      <Card.Title>Puma R78 Runner Trainers</Card.Title>
                      <Card.Text>
                        This shoe was built with breathable cushioning. Driven
                        by a '70s design aesthetic, yet firmly rooted in the
                        here and now, the R78 contains...
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Pumaxrayspeedfc.png"
                    />
                    <Card.Body>
                      <Card.Title>Puma X-Ray Speed FC</Card.Title>
                      <Card.Text>
                        The X-Ray Speed is lightweight and agile. The mixed
                        material upper incorporates stylish colour combos, with
                        vibrant highlights reflected in the sole.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Redefined.png"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Redefined</Card.Title>
                      <Card.Text>
                        Keep it casual by matching this pair with trim denims.
                        The sole will keep your feet super comfortable all day
                        long. Flat shoe. Pointy toe.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Superb.png"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Superb</Card.Title>
                      <Card.Text>
                        Stay classy with Steve Madden's Superb heel that you can
                        tie up. Heel height 7.5cm. Upper - Textile, Lining and
                        Sock - Textile, Sole - Other Materials.
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
                <ColBootstrap
                  lg={true}
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://orderhut.co.zw/images/products/Touchdown.png"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Touchdown</Card.Title>
                      <Card.Text>
                        Featuring a high-quality upper, it will provide the
                        necessary support.With a round-shaped tip and durable
                        sole, it is perfect for formal occasions.
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
