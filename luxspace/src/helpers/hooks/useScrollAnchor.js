import { useLayoutEffect } from "react";

export default function useScrollAnchor() {
    useLayoutEffect(() => {
        const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

        for (let anchor = 0; anchor < smoothScrollAnchor.length; anchor++) {
            const element = smoothScrollAnchor[anchor];

            element.addEventListener("click", function (e) {
                e.preventDefault();
                if (
                    document.getElementById(
                        this.getAttribute("href").replace("#", "")
                    )
                )
                    document
                        .querySelector(this.getAttribute("href"))
                        .scrollIntoView({
                            behavior: "smooth",
                        });
            });
        }

        return () => {};
    });
}
