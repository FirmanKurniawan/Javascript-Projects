import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Result, Item } from "ytsr";
import { MdSettings, MdPlayCircle, MdDownloading } from "react-icons/md";
import callAPI from "@/lib/API";
import type { APIResponseTypes } from "@/lib/API";
import swal from "@/components/Swal";
import Image from "next/image";
import { useState } from "react";

function DisplayAllVideos({ data }: { data: Result }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<number>(10);

  const downloadVideos = async (event: any, url: string) => {
    event.preventDefault();

    setLoading(true);

    await callAPI({
      path: `download/`,
      method: "POST",
      data: {
        url: encodeURI(url),
        format: "mp3",
        quality: "highestaudio",
      },
    })
      .then((response: APIResponseTypes) => {
        if (response.success) {
          swal
            .custom(
              "File successfully converted!",
              "Click the button below to download the file.",
              "success",
              true,
              "Download",
              "Cancel",
              true
            )
            .then((result) => {
              if (result.isConfirmed) {
                window.open(response.data.url, "_blank");
              } else if (result.dismiss === 1) {
                swal.error("Cancelled", "Your file is safe :)");
              }
            });

          setLoading(false);
        } else {
          swal.error("Error", response.message);

          setLoading(false);
        }
      })
      .catch((error) => {
        swal.error("Error", error.message);

        setLoading(false);
      });
  };

  return (
    <Container>
      <Row>
        {data !== null ? (
          data.items.slice(0, visible).map((video: Item, idx: number) => {
            if (video.type === "video") {
              return (
                <Col key={idx} md={6} lg={6} sm={12}>
                  <Card bg="secondary" className="text-white shadow-lg mb-3">
                    <Card.Body>
                      <Image
                        className="img-thumbnail"
                        src={video.bestThumbnail?.url as string}
                        width={video.bestThumbnail?.width}
                        height={video.bestThumbnail?.height}
                        alt={video.title}
                      />
                      <Card.Title>{video.title}</Card.Title>
                      <Card.Text>
                        Duration: {video.duration}
                        <br />
                        <strong>{video.author?.name}</strong>
                      </Card.Text>

                      <div className="d-flex justify-content-evenly">
                        <Button
                          variant="primary"
                          type="button"
                          onClick={(e) => downloadVideos(e, video.url)}
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />{" "}
                              Converting...
                            </>
                          ) : (
                            <>
                              <span>
                                <MdSettings fontSize={"1.4em"} />
                              </span>{" "}
                              Convert to MP3{" "}
                            </>
                          )}
                        </Button>

                        <a
                          className="btn btn-light"
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>
                            <MdPlayCircle fontSize={"1.4em"} />
                          </span>{" "}
                          Play
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })
        ) : (
          <Col md={12}>
            <h3 className="text-center p-4">No videos found</h3>
          </Col>
        )}

        {data !== null && (
          <Col md={12}>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="button"
                onClick={() => setVisible(visible + 10)}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Loading...
                  </>
                ) : (
                  <>
                    <span>
                      <MdDownloading fontSize={"1.4em"} />
                    </span>{" "}
                    Load more videos{" "}
                  </>
                )}
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default DisplayAllVideos;
