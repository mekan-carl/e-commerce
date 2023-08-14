import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import storeItems from "../data/Items.json";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <span className="fs-2 me-2">Store</span>
      <Form>
        <InputGroup className="mb-5 shadow-sm ">
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="outline-dark" id="button-addon1">
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
