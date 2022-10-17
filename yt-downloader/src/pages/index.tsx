import Layout from "@/components/Layout";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  InputGroup,
  Alert,
  Spinner,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { VideoDetails } from "ytdl-core";
import { MdSearch, MdAudiotrack, MdOndemandVideo } from "react-icons/md";

import { FormEvent, useState } from "react";
import Image from "next/image";
import callAPI from "@/lib/API";
import type { APIResponseTypes } from "@/lib/API";
import { useRouter } from "next/router";
import swal from "@/components/Swal";

function FormatTime(seconds: number): string {
  const date = new Date(seconds * 1000);
  const mm = date.getUTCMinutes();
  const ss = date.getSeconds();
  return `${mm}:${ss}`;
}

function Home() {
  const [url, setUrl] = useState<string>("");
  const [result, setResult] = useState<VideoDetails>();
  const [loading, setLoading] = useState<boolean>(false);
  const [quality, setQuality] = useState<any>("");
  const [done, setDone] = useState<string>("");

  const router = useRouter();

  const handleClickMP3 = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setDone("");

    if (url) {
      await callAPI({
        path: `download/`,
        method: "POST",
        data: {
          url: encodeURI(url),
          format: "mp3",
          quality,
        },
      })
        .then((res: APIResponseTypes) => {
          if (res.success) {
            setDone(`${process.env.NEXT_PUBLIC_BASE_URL}${res.data.url}`);
          } else {
            swal.error("An error has occurred", res.message);
          }

          setLoading(false);
        })
        .catch((err: any) => {
          swal.error("An error has occurred", err);
          setLoading(false);
        });
    }
  };

  const handleClickMP4 = async (e: any) => {
    e.preventDefault();

    setDone("");
    setLoading(true);

    if (url) {
      if (quality === "") {
        swal.error("An error has occurred", "Please select a quality");
        setLoading(false);
        setDone("");

        return;
      }

      await callAPI({
        path: `download/`,
        method: "POST",
        data: {
          url: encodeURI(url),
          format: "mp4",
          quality,
        },
      })
        .then((res: APIResponseTypes) => {
          if (res.success) {
            setDone(`${process.env.NEXT_PUBLIC_BASE_URL}${res.data.url}`);
          } else {
            swal.error("An error has occurred", res.message);
          }

          setLoading(false);
        })
        .catch((err: any) => {
          swal.error("An error has occurred", err);
          setLoading(false);
        });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!url) {
      swal.error("An error has occurred", "Please enter a valid URL");
      return;
    }

    await callAPI({
      path: `details/?url=${url}`,
      method: "GET",
    })
      .then((res: APIResponseTypes) => {
        if (res.success === false) {
          swal.error("An error has occurred", res.message);
        } else {
          setResult(res.data);
        }
      })
      .catch((err) => {
        swal.error("An error has occurred", err);
      });
  };

  return (
    <Layout title="YT Downloader">
      <h3 className="h3 text-center p-4 fw-bold">YouTube Downloader</h3>
      <Card bg="secondary" className="text-white shadow-lg">
        <Card.Header>
          <Card.Title>Input YouTube video below:</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUrl">
              <InputGroup>
                <Form.Control
                  type="url"
                  placeholder="Enter video URL here..."
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  <span>
                    <MdSearch fontSize={"1.4em"} />
                  </span>{" "}
                  Search
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>

          {result && (
            <div className="mt-3 d-flex justify-content-sm-center justify-content-md-center justify-content-lg-around align-items-center flex-sm-row flex-md-column flex-lg-row flex-wrap w-100">
              <div>
                <Image
                  className="img-thumbnail"
                  src={result.thumbnail.thumbnails[3].url}
                  height={result.thumbnail.thumbnails[3].height}
                  width={result.thumbnail.thumbnails[3].width}
                  alt="Thumbnail"
                />
              </div>
              <div className="d-flex justify-content-center align-items-start flex-column sm-mt-3">
                <h4 className="text-white h5">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-light text-decoration-none"
                  >
                    {result.title}
                  </a>
                </h4>
                <p className="text-white">
                  <span className="fw-bold">{result.author}</span>
                  <br />
                  {FormatTime(parseInt(result.lengthSeconds))}
                </p>
                <div className="d-flex w-100 justify-content-between">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleClickMP3}
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
                          <MdAudiotrack fontSize={"1.4em"} />
                        </span>{" "}
                        Convert to MP3
                      </>
                    )}
                  </Button>{" "}
                  <Dropdown as={ButtonGroup} onSelect={(e) => setQuality(e)}>
                    <Button
                      variant="light"
                      onClick={handleClickMP4}
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
                            <MdOndemandVideo fontSize={"1.4em"} />
                          </span>{" "}
                          Convert to MP4
                        </>
                      )}
                    </Button>

                    <Dropdown.Toggle
                      split
                      variant="light"
                      id="dropdown-split-basic"
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="360p">360p</Dropdown.Item>
                      <Dropdown.Item eventKey="480p">480p</Dropdown.Item>
                      <Dropdown.Item eventKey="720p">720p</Dropdown.Item>
                      <Dropdown.Item eventKey="1080p">1080p</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          )}
          {done !== "" && (
            <Alert
              variant="primary"
              onClose={() => setDone("")}
              dismissible
              className="mt-3"
            >
              <Alert.Heading>Success!</Alert.Heading>
              <hr />
              <p>
                Your video has been converted. You can
                <a
                  href={done}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-decoration-none"
                >
                  {" "}
                  download here
                </a>
              </p>
              <br />
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => router.reload()}
              >
                Convert another video
              </a>
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Layout>
  );
}

export default Home;
