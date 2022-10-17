import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";

function MainNav() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${encodeURI(query)}`);
  };

  return (
    <header>
      <Navbar bg="secondary" expand="lg" variant="dark">
        <Container fluid="sm">
          <Link href="/" passHref>
            <Navbar.Brand href="#home">YT Downloader</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto"></Nav>

            <Form className="d-flex p-2" onSubmit={handleSubmit}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search any keywords here..."
                  aria-label="Search any keywords here..."
                  required
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  <span aria-label="Search here">
                    <MdSearch fontSize={"1.5em"} />
                  </span>
                </Button>
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNav;
