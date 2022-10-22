import React from "react";
import { Link } from 'react-router-dom'

export default function ErrorMessage({ title, body }) {
    return (
        <section className="mt-28">
            <div className="container mx-auto min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full md:w-4/12 text-center">
                        <h2 className="text-3xl font-semibold mb-6">
                            {title}
                        </h2>
                        <p className="text-lg mb-12">
                            {body}
                        </p>
                        <Link
                            to="/"
                            className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
                        >
                            Back to Shop
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

ErrorMessage.defaultProps = {
    title: "404 Not Found",
    body: "Looks like this page not found!",
};