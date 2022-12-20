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
                      src="https://drive.google.com/file/d/1G_TukWHR0u1aYwDH2axlChcTsTd0bh_X/view?usp=share_link.png"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Aahron</Card.Title>
                      <Card.Text>
                        Transition from home office to headquarters with ease in
                        the Aahron loafer from Steve Madden, made with smooth
                        leather, patent leather, or velvet and an embellished
                        horsebit accent across the vamp of the shoe.
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
                      src="https://drive.google.com/file/d/1oAIzKje2lUcuIwXC3egxa_qD7zhDMhVv/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Alanandra</Card.Title>
                      <Card.Text>
                        The perfect slip-on-and-go slides. Stylish with a square
                        toe and quilted detailing, these babes go with your fave
                        dresses, shorts, and vacation looks. Not to mention the
                        super comfy insoles! Flat sandals. Square open toe.
                        Quilted details. Slip on closure.
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
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://drive.google.com/file/d/1WHxayPR4j-twiGn2QDrmSV6OyW7kQ8eS/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Alessi-R</Card.Title>
                      <Card.Text>
                        Looking for the perfect shiny pump? Go for the Alessi-R!
                        This pump has a pointed toe covered with small
                        rhinestones and a tall stiletto heel. The strap offers
                        extra strength so you can rock these heels all night
                        long! Heel height: 10.5cm.
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
                      src="https://drive.google.com/file/d/13dizN9wjC5mvRha4jumOfOzAlV5ip7Z6/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Dallia</Card.Title>
                      <Card.Text>
                        You'll love the comfort and style of these super modish
                        casual shoes from Call It Spring. Has regular styling,
                        lace-up detail. Expand your modish shoe collection with
                        these comfy Call It Spring casual shoes. Heels. Square
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
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://drive.google.com/file/d/1oVb57bF6yOLSLfbQo65xK6P8O6yYll8L/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Izzy</Card.Title>
                      <Card.Text>
                        Because every day is a loafer day, the Izzy chunky
                        loafers are a must. Featuring a classic round toe and
                        chunky lug sole, you just can't resist. Chunky loafers.
                        Round toe. Lug soles. Slip on.
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
                      src="https://drive.google.com/file/d/1hjQRh8q3lVsx3-nOo5wQFNiK0EKifr8r/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Kelli</Card.Title>
                      <Card.Text>
                        The Kelli high heel sandals are your new sole-mate.
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
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://drive.google.com/file/d/1HKuFvQHyBHWtR0OdqBhfprnU3iN-5IRq/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Laurelle</Card.Title>
                      <Card.Text>
                        The Laurelle high heels are classy with a twist. These
                        babes are the best of both worlds, featuring a chic
                        pointy toe, flared heel, and edgy cutout detail. High
                        heels. Pointy toe. Flared heel. Slip on. Cutout details.
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
                      src="https://drive.google.com/file/d/1UfRl97MTw_lr6Be7yl23NJ89cKZHk29f/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Maryana</Card.Title>
                      <Card.Text>
                        Go big or go home with the Maryana low-top slip-on
                        sneakers. These babes are ready to make a statement,
                        featuring a big chain detail. Sneaker. Round toe. Chain
                        detail. Slip on closure.
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
                      src="https://drive.google.com/file/d/1BQZKqdp2CV3QV5nUEsqSg1ygegLmqRygj/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Natalia-R</Card.Title>
                      <Card.Text>
                        Make sure you're event-ready with our gorgeous NATALIA
                        dress sandal. This style features a sleek stiletto heel
                        and a strappy silhouette, perfect for wearing with your
                        go-to LBD. Heel height: 11cm.
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
                      src="https://drive.google.com/file/d/1RKdwZDASTlE-mnAtF00eiyuV8oPG3NeP/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Nicki</Card.Title>
                      <Card.Text>
                        Get the best of both worlds with the Nicki high heel.
                        Playful yet chic, we love the pointy closed toe, strappy
                        detailing, and stiletto heel. High heel. Pointy toe.
                        Stilletto heel. Lace up closure. Wrap detail. Heel
                        height: 9.5 CM.
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
                      src="https://drive.google.com/file/d/1X5zEAbv0x9EJG_Xnghg9pvw0EYq_TEwq/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Nike Renew Run 3</Card.Title>
                      <Card.Text>
                        Feel the potential in the Nike Renew Run 3. Plush where
                        you need it, stretchy where it counts—these shoes keep
                        your feet stable with every step and turn. Super-soft
                        foam adds a slightly springy feel for a little jump to
                        your stride. It's got a clean look with fresh details
                        that invite you to lace up and hit the road.
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
                      src="https://drive.google.com/file/d/1LfOsV_bIn21rGO8yNRT804yVtcwxV2hD/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden No Doubt</Card.Title>
                      <Card.Text>
                        No Doubt by Steve Madden might just be as timeless as
                        they come. These classy, simple and effortlessly elegant
                        dress sandals are crafted with a sleek leather-look
                        material and ankle fastening design that goes with
                        everything from evening gowns to workwear. Finish off
                        the look with a statement bag or chunky necklace to get
                        that extra edge. Heel height: 7cm+.
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
                      src="https://drive.google.com/file/d/1RMtxdOZK3okhmqpNOE9zIMBoj3drmUYy/view?usp=share_link"
                      height="400px"
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
                <ColBootstrap lg={true}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://drive.google.com/file/d/1tHv1lZNP5owMg1CZapfXWI5Lk1bSlmY_/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Puma R78 Runner Trainers</Card.Title>
                      <Card.Text>
                        Back in the day when sport meant running and style meant
                        sweatbands and velour V-necks, PUMA cut through with a
                        lightweight runner made to race. Christened the Cabana
                        Racer Fun and aimed at the most serious of runners, this
                        shoe was built close to the ground to strengthen every
                        muscle with breathable cushioning over the track and
                        through the woods. Inspired by the Cabana, the new R78
                        Runner is hitting the heritage running trainer scene
                        with full force. Driven by a '70s design aesthetic, yet
                        firmly rooted in the here and now, the R78 takes nylon
                        and ripstop and pairs these with unexpected finishes.
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
                      src="https://drive.google.com/file/d/1n2IoEuHXmSCSu2hrBp1Ab36YGlxeK2cG/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Puma X-Ray Speed FC</Card.Title>
                      <Card.Text>
                        Fans of the X-Ray are in luck: this season, we're
                        extending the range with a brand-new model. The X-Ray
                        Speed is lightweight and agile, keeping you quick on
                        your feet. The mixed material upper incorporates stylish
                        colour combos, with vibrant highlights reflected in the
                        sole. The silhouette combines sleek lines with a chunky
                        midsole, melding the shoe's retro origins with a modern
                        look.
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
                      src="https://drive.google.com/file/d/1FE5k9k4AS6-zgV6oktVoPBhudOO-KJmZ/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Redefined</Card.Title>
                      <Card.Text>
                        You'll love the comfort and style of these footwears
                        from Call It Spring. Has regular styling details. Expand
                        your modish shoe collection with these comfy Call It
                        Spring casual shoes. Keep it casual for your date by
                        matching this brown pair with trim denims and a classic
                        leather jacket. The sole will keep your feet super
                        comfortable all day long. Flat shoe. Pointy toe. Slip on
                        closure.
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
                      src="https://drive.google.com/file/d/11jTdp-Fquw_iasV80x016_dfWY8wqgj_/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Superb</Card.Title>
                      <Card.Text>
                        Heel height 7.5cm. Upper - Textile, Lining and Sock -
                        Textile, Sole - Other Materials.
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
                      src="https://drive.google.com/file/d/1UBNm4-jZYEpz3rrCQ2gLkMw1Bj9eT6YE/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Touchdown</Card.Title>
                      <Card.Text>
                        Enhance your smart formal look with this pair of derby
                        shoes from Steve Madden. Featuring a high-quality upper,
                        it will keep your feet at ease while providing the
                        necessary support. The sole adds to its longevity and
                        prevents wear and tear. With a round-shaped tip, it is
                        perfect for formal occasions.
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
                      src="https://drive.google.com/file/d/1h8L75LIatzmudSBGITocd1dLRWgEf6mT/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Steve Madden Vala-SM</Card.Title>
                      <Card.Text>
                        Shiny, sharp and seductive! The VALA pump delivers all
                        of the above, featuring a tall stiletto heel, pointed
                        toe and reflective patent surfaces. The perfect basic
                        pump that can't be missed in any women's shoe stash!
                        Heel height: 10cm.
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
                      src="https://drive.google.com/file/d/1GVqPI_VfHA9Va-qRw8VDgEmoseAlFzY6/view?usp=share_link"
                      height="400px"
                    />
                    <Card.Body>
                      <Card.Title>Call It Spring Wildflower</Card.Title>
                      <Card.Text>
                        You'll love the comfort and style of these footwears
                        from Call It Spring. Has regular styling details. Expand
                        your modish shoe collection with these comfy Call It
                        Spring casual shoes. Loafer. Round toe. Quilted detail.
                        Slip on closure.
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
