import { Col, Row } from "react-bootstrap";
import storeImg from "../assets/aboutImgs/store-img.jpg";

const About = () => {
  return (
    <>
      <Row xs={1} md={2} style={{ marginTop: "5rem" }}>
        <Col data-aos="fade-right">
          <img className="img-fluid mb-3" src={storeImg} alt="store-Image" />
        </Col>
        <Col data-aos="fade-left">
          <h2 className="text-center ">About Us</h2>
          <p className="text-center text-body-secondary fw-normal fs-5">
            Discover the epitome of elegance with our exquisite collection of
            beautiful dresses. From enchanting evening gowns to charming
            sundresses, our curated selection caters to every style and
            occasion. Crafted with attention to detail and using the finest
            fabrics, these dresses enhance your natural beauty and embrace your
            individuality. Whether you're attending a glamorous event or
            enjoying a casual day out, our dresses are designed to make you feel
            confident and stunning. Elevate your wardrobe with these timeless
            pieces that celebrate the art of fashion.
          </p>
        </Col>
      </Row>
      <iframe
        data-aos="fade-up"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6455.166274688436!2d28.716425564862295!3d40.99370753838231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa055fa0c7bc3%3A0xe0d85c4d83cc07b6!2zUGVsaWNhbiBNYWxsIEFsxLHFn3ZlcmnFnyB2ZSBZYcWfYW0gTWVya2V6aQ!5e0!3m2!1sen!2str!4v1691847808995!5m2!1sen!2str"
        style={{
          border: 0,
          height: "60vh",
          width: "90vw",
          marginTop: "10rem",
          marginBottom: "8rem",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default About;
