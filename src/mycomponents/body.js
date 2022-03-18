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
import { useNavigate } from "react-router-dom";

function body() {
  // const navigate = useNavigate();

  // function handelButtonClick() {
  //   navigate('/blog');
  // }
  return (
    <div>
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
        <div className="mcards">
          <h2 >Trending today</h2>
          <Carousel >
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
        </div>
        <div className="mcards">
          <h2 >Popular Blogs</h2>
          <Carousel >
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
        </div>
      </div>
      <div style={{ background: "#577783", padding: '3rem' }}>
        <center><Button style={{ background: '#343a40', borderColor: 'white', padding: '1rem' }}>Create Blog</Button></center>
      </div>
    </div>
  )
}

export default body
