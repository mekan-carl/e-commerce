import { Col, Row } from "react-bootstrap";
import appStore from "../assets/footerImgs/appStore.png";
import googlePlay from "../assets/footerImgs/google-play.png";
import companies from "../assets/footerImgs/companies.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black px-3">
      <Row xs={1} md={3} lg={4} style={{ color: "white", marginTop: "4rem" }}>
        <Col>
          <h4 className="my-3 ">About us</h4>
          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Who we are
            </a>
          </p>
          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Contact us
            </a>
          </p>

          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Sustainability
            </a>
          </p>
          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Careers
            </a>
          </p>
        </Col>
        <Col>
          <h4 className="my-3">Help</h4>
          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Frequently asked questions
            </a>
          </p>
          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              How can I return ?
            </a>
          </p>
          <p>
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Customer service
            </a>
          </p>
        </Col>
        <Col>
          <h4 className="mt-4">Mobile Apps</h4>
          <div style={{ width: "10rem" }} className="d-flex flex-column ">
            <a href="#">
              <img
                src={googlePlay}
                style={{
                  marginBottom: "1rem",
                  height: "3rem",
                }}
              />
            </a>
            <a href="#">
              <img
                src={appStore}
                style={{
                  height: "3rem",
                  width: "10rem",
                }}
              />
            </a>
          </div>
        </Col>
        <Col>
          <h4 className="mt-4">Safe Shopping</h4>
          <img
            src={companies}
            style={{ width: "15rem", height: "45px", paddingRight: "0" }}
          />
        </Col>
        <Col className="mb-3 ">
          <h4 className="mt-4">Follow Us</h4>
          <a href="#" className="fs-4 mx-2" style={{ color: "#0165E1" }}>
            <BsFacebook />
          </a>
          <a href="#" className="fs-4 mx-2" style={{ color: "#C13584" }}>
            <BsInstagram />
          </a>
          <a href="#" className="fs-4 mx-2 " style={{ color: "#55acee" }}>
            <BsTwitter />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
