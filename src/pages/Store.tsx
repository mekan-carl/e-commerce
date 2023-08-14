import { Col, Container, Row } from "react-bootstrap";
import storeitems from "../data/Items.json";
import StoreItem from "../components/StoreItem";
import SearchInput from "../components/SearchInput";

export function Store() {
  return (
    <Container>
      <SearchInput />
      <Row xs={1} md={2} lg={3} xl={4} className=" g-3">
        {storeitems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
