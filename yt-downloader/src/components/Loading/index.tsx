import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <Layout title="YT Downloader - Search">
      <h3 className="h3 text-center p-4">YouTube Downloader - Search</h3>

      <Container>
        <Row>
          {[...Array(10)].map((_, idx) => (
            <Col key={idx} md={6} lg={6} sm={12}>
              <Skeleton count={3} />

              <div className="d-flex justify-content-evenly">
                <Skeleton count={2} width="70" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
