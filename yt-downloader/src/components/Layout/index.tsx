import Head from "next/head";
import MainNav from "@/components/Navbar";
import Container from "react-bootstrap/Container";

type LayoutTypes = {
  title?: string;
  children: React.ReactNode;
};

function Layout({ title, children }: LayoutTypes) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MainNav />

      <main className="mb-5" style={{ minHeight: "72.8vh" }}>
        <Container fluid="sm">
          <section style={{ maxWidth: "780px", margin: "0 auto" }}>
            {children}
          </section>
        </Container>
      </main>

      <footer className="position-relative left-0 right-0 bottom-0 bg-secondary text-light w-100">
        <Container fluid="sm">
          <section className="pt-4 pb-1">
            <p>
              Made with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by{" "}
              <a
                href="https://instagram.com/lukmaan.24"
                className="link-primary text-decoration-underline"
                target="_blank"
                rel="noreferrer"
              >
                Lukman
              </a>
            </p>
          </section>
        </Container>
      </footer>
    </>
  );
}

export default Layout;
