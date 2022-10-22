import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Breadcrumb({ list }) {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {list?.map?.((item, index) => {
                        const ariasCurrent =
                            index === list?.length - 1
                                ? { "aria-label": "current-page" }
                                : {};
                            return (
                                <li key={item.url}>
                                    <Link to={item.url} {...ariasCurrent}>{item.name}</Link>
                                </li>
                            );
                    })}
                </ul>
            </div>
        </section>
    );
}

Breadcrumb.propTypes = {
    list: PropTypes.array.isRequired,
};
