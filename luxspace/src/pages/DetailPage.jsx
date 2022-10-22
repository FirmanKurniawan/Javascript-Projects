import Footer from "parts/Footer";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Sitemap from "parts/HomePage/Sitemap";
import React from "react";
import ProductDetails from "parts/DetailPage/ProductDetails";
import Suggestion from "parts/DetailPage/Suggestion";

const DetailPage = (props) => {
    return (
        <>
            <Header theme={'black'} />
            <Breadcrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/categories/91231", name: "Office Room" },
                    { url: "/categories/91231/products/7888", name: "Details" },
                ]}
            />
            <ProductDetails />
            <Suggestion />
            <Sitemap />
            <Footer />
        </>
    );
};

export default DetailPage;
