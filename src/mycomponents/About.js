import React, { Component } from "react";
import { Card,Button,CardGroup } from "react-bootstrap";
import '../mycss/aboutus.css'
import logo from '../stock/forfooter3.svg'
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" id = "abt1">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">Punny headline</h1>
            <p class="lead font-weight-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a
              class="btn btn-outline-secondary"
              href="https://getbootstrap.com/docs/4.3/examples/product/#"
            >
              Coming soon
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div style={{marginTop:'1rem'}}>
        <h1><center>OUR TEAM</center></h1>
        <CardGroup>
            <Card style={{marginLeft:"15px",marginRight:"10px"}}>
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
            <Card style={{ width: "18rem", marginLeft:"10px",marginRight:"10px"}}>
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
            <Card style={{marginLeft:"10px",marginRight:"15px"}}>
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
          </div>
          <div className="options">
            <div className="option1" style={{marginLeft:'10rem',alignItems:"center"}}>
                <h2>Choose the perfect design</h2>
                <p>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</p>
            </div>
            <div className="option2">
                <img src={logo} style={{height:'18rem',float:'right',marginRight:'5rem'}}/>
            </div>
          </div>
          <div className="options">
            <div className="option2">
                <img src={logo} style={{height:'18rem',float:'right',marginRight:'5rem'}}/>
            </div>
            <div className="option1" style={{marginRight:'5rem',alignItems:"center"}}>
                <h2>Get a free domain</h2>
                <p>Give your blog the perfect home. Get a free blogspot.com domain or buy a custom domain with just a few clicks.</p>
            </div>
          </div>
          <div className="options">
            <div className="option1" style={{marginLeft:'10rem',alignItems:"center"}}>
                <h2>Earn money</h2>
                <p>Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion.</p>
            </div>
            <div className="option2">
                <img src={logo} style={{height:'18rem',float:'right',marginRight:'5rem'}}/>
            </div>
          </div>
          <div className="options">
            <div className="option2">
                <img src={logo} style={{height:'18rem',float:'right',marginRight:'5rem'}}/>
            </div>
            <div className="option1" style={{marginRight:'5rem',alignItems:"center"}}>
                
                <h2>Know your audience</h2>
                <p>Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.</p>
            </div>
          </div>

      </div>
    );
  }
}
