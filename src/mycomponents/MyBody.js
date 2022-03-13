import React, { Component } from "react";
import {
  CardGroup,
  Carousel,
  Card,
  Button,
  CarouselItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../mycss/mbody.css";

export default class Body extends Component {
  render() {
    return (
      <div id="body-whole">
        <div id="carouse-slide">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000x400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000x400"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000x400"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <div className="mcards">
          <h2>Trending Today</h2>
          <CardGroup>
            <Card style={{ width: "10rem", margin: "5px" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/400x400"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", margin: "5px" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/400x400"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", margin: "5px" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/400x400"
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div> */}
        {/* <div className="mcards">
        <h2 >Popular Blogs</h2>
          <Carousel>
            <CarouselItem>
              <CardGroup>
                <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/random/400x400"
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/random/400x400"
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/random/400x400"
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </CarouselItem>
            <CarouselItem>
              <CardGroup>
                <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/random/400x400"
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/random/400x400"
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem", margin: "5px" }}>
                  <Card.Img
                    variant="top"
                    src="https://source.unsplash.com/random/400x400"
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </CarouselItem>
          </Carousel>
        </div> */}
      </div>
    );
  }
}
