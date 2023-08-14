import { Card, Row } from "react-bootstrap";
import img1 from "../assets/new arrivals/new arr no 1.jpeg";
import img2 from "../assets/new arrivals/new arr no 2.webp";
import img3 from "../assets/new arrivals/new arr no 3.webp";
import img4 from "../assets/new arrivals/new arr no 4.webp";
import img7 from "../assets/new arrivals/new arr no 7.webp";
import img8 from "../assets/new arrivals/new arr no 8.webp";
import img9 from "../assets/new arrivals/new arr no 9.webp";
import img10 from "../assets/new arrivals/new arr no 10.webp";

function NewArrivals() {
  return (
    <div>
      <Row
        xs={1}
        md={2}
        lg={4}
        className="gap-4 d-flex justify-content-center "
      >
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img1} style={{ objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>Zebra style dress</Card.Title>
            <Card.Text className="text-muted">
              A zebra style dress flaunts bold black and white stripes, creating
              a striking and eye-catching fashion statement.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Brown summer dress</Card.Title>
            <Card.Text className="text-muted">
              Elegant brown summer dress: breezy comfort, earthy tones, perfect
              for sunny days and casual gatherings.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Black Mesh dress</Card.Title>
            <Card.Text className="text-muted">
              Elegant black mesh dress: alluring design, subtle allure,
              intricate texture, captivating silhouette, perfect for stylish
              occasions.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>White long dress</Card.Title>
            <Card.Text className="text-muted">
              Elegant white dress flows gracefully, embodying timeless beauty
              and sophistication, perfect for special occasions.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img9} />
          <Card.Body>
            <Card.Title>Summer dress</Card.Title>
            <Card.Text className="text-muted">
              Light flowing fabrics, vibrant colors, and sundresses define the
              carefree comfort and style of summer fashion.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img10} />
          <Card.Body>
            <Card.Title>Black dress </Card.Title>
            <Card.Text className="text-muted">
              Elegant black dress exudes timeless charm, epitomizing
              sophistication and versatility in every graceful silhouette.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img7} />
          <Card.Body>
            <Card.Title>White beautiful dress </Card.Title>
            <Card.Text className="text-muted">
              Crisp white dress, a canvas of purity, embraces simplicity,
              radiating charm and timeless beauty.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-up" style={{ width: "18rem", padding: "0" }}>
          <Card.Img variant="top" src={img8} />
          <Card.Body>
            <Card.Title>Light red color dress</Card.Title>
            <Card.Text className="text-muted">
              A dress in a soft shade of light red, exuding charm and embracing
              subtlety with style.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default NewArrivals;
