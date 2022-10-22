import Footer from "parts/Footer";
import Header from "parts/Header";
import React from "react";
import Sitemap from "parts/HomePage/Sitemap";
import ErrorMessage from "parts/ErrorMessage";

export default function NotFoundPage() {
    return (
        <>
            <Header theme={"black"} />
            <ErrorMessage />
            <Sitemap />
            <Footer />
        </>
    );
}
