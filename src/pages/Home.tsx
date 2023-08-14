import Carousel from "react-bootstrap/Carousel";
import firstImg from "../assets/homepageimgs/new season dress.jpg";
import secondImg from "../assets/homepageimgs/new seasons dress -2.jpg";
import thirdImg from "../assets/homepageimgs/pexels-ivan-samkov-5947556.jpg";
import NewArrivals from "../components/NewArrivals";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100vw", objectFit: "cover" }}
            className="img-fluid"
            src={firstImg}
          />
          <Carousel.Caption>
            <h3>Sunny Citrus & Tropical Vibes</h3>
            <p>Elevate Your Summer Spirit!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100vw", objectFit: "cover" }}
            className="img-fluid"
            src={secondImg}
          />
          <Carousel.Caption>
            <h3>Cozy Knits & Earthy Tones</h3>
            <p>Wrap Yourself in Autumn's Coolest Trends!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh", width: "100vw", objectFit: "cover" }}
            className="img-fluid"
            src={thirdImg}
          />
          <Carousel.Caption>
            <h3>Black Friday Blowout: Unbeatable Deals Await!</h3>
            <p>Don't miss out, limited time, shop now and save big!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="d-flex justify-content-center text-start my-5 fs-1 pt-5">
        # New Arrivals
      </h1>
      <NewArrivals />
      <div className="d-flex justify-content-center">
        <Link to="/store">
          <Button
            role="button"
            variant="warning"
            size="lg"
            className=" my-5"
            style={{ fontSize: "1.3rem", padding: "0.8rem" }}
          >
            {" "}
            Go to shopping
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
