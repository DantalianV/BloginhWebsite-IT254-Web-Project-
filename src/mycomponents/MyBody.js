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
                src="https://source.unsplash.com/random/1000x400/?sig=3/?nature"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Nature helps to ease us from winter to spring</h3>
                <p>
                  It is the life of the crystal, the architect of the flake, the fire of the frost, the soul of the sunbeam. This crisp winter air is full of it.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000x400/?sig=1/?nature"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Red-orange Sahara dust coats Spain</h3>
                <p>Makes it hard to breathe  BARCELONA, Spain (AP) — Hot air from the Sahara Desert has swirled over the Mediterranean Sea and coated Spain with red-orange dust</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000x400/?sig=2/?nature"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Invasive insects in US could kill 1.4M trees</h3>
                <p>
                  Cost $900M by 2050: Study   Researchers from McGill University have estimated that over the next 30 years, 1.4 million street trees will be killed by invasive insect species
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
