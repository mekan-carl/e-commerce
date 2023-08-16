import { BsSearch } from "react-icons/bs";
import { useRef, useState } from "react";
import storeItems from "../data/Items.json";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  function focus() {
    ref.current?.focus();
    ref.current?.value;
  }
  return (
    <>
      <span className="fs-2 me-2">Store</span>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <InputGroup className="mb-5 shadow-sm ">
          <Form.Control
            ref={ref}
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-dark" type="submit" onClick={focus}>
            <BsSearch />
          </Button>
        </InputGroup>
      </Form>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4 ">
        {storeItems
          .filter((item) => {
            return search.toLowerCase() === ""
              ? null
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default SearchInput;
