import { Col, Row } from "react-bootstrap";
import appStore from "../assets/footerImgs/appStore.png";
import googlePlay from "../assets/footerImgs/googlePlay.png";
import companies from "../assets/footerImgs/companies.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Row
        xs={1}
        md={3}
        lg={4}
        className=" bg-black"
        style={{ color: "white", marginTop: "4rem" }}
      >
        <Col className="mx-3 my-3">
          <h4 className="my-3">About us</h4>
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
        <Col className="mx-3 my-3">
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
        <Col className="mx-3 my-3">
          <h4 className="my-3">Mobile Apps</h4>
          <span className="d-flex align-items-center">
            <img src={appStore} style={{ width: "8rem" }} />
            <img src={googlePlay} style={{ width: "10rem" }} />
          </span>
        </Col>
        <Col className="mx-3 my-3">
          <h4 className="my-3">Safe Shopping</h4>
          <img src={companies} style={{ width: "260px", height: "45px" }} />
        </Col>
        <Col className="mx-3 my-3">
          <h4>Follow Us</h4>
          <a href="#" className="fs-4 mx-2" style={{ color: "#0165E1" }}>
            <BsFacebook />
          </a>
          <a href="#" className="fs-4 mx-2" style={{ color: "#C13584" }}>
            <BsInstagram />
          </a>
          <a href="#" className="fs-4 mx-2" style={{ color: "#55acee" }}>
            <BsTwitter />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
