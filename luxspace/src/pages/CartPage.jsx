import Footer from "parts/Footer";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import React from "react";
import Sitemap from "parts/HomePage/Sitemap";
import ShoppingCart from "parts/CartPage/ShoppingCart";
import ShoppingDetails from "parts/CartPage/ShoppingDetails";

const CartPage = (props) => {
    return (
        <>
            <Header theme={"black"} />
            <Breadcrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/cart", name: "Shopping Cart" },
                ]}
            />
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShoppingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
            <Footer />
        </>
    );
};

export default CartPage;
