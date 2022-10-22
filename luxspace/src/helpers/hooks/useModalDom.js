import { addClass } from "helpers/formats/classNameModifier";
import { useLayoutEffect } from "react";

export default function useModalDom() {
    useLayoutEffect(() => {
        const openModal = (e) => {
            const modalWrapper = document.createElement("div");
            const modalOverlay = document.createElement("div");
            modalOverlay.addEventListener("click", function () {
                modalWrapper.remove();
            });
            addClass(
                modalWrapper,
                "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen"
            );
            addClass(modalOverlay, modalWrapperClassNames);
            const modalContent = document.createElement("div");

            modalContent.innerHTML = e.target.attributes?.["data-content"].value;
            addClass(modalContent, "bg-white p-0 md:p-6 z-10");
            modalWrapper.append(modalOverlay);
            modalWrapper.append(modalContent);
            document.body.append(modalWrapper);
        };

        const modalTriggers = document.getElementsByClassName("modal-trigger");
        const modalWrapperClassNames = "fixed inset-0 bg-black opacity-35";
        for (let index = 0; index < modalTriggers.length; index++) {
            const e = modalTriggers[index];
            e.addEventListener("click", openModal);
        }

        return () => {
            for (let index = 0; index < modalTriggers.length; index++) {
                const e = modalTriggers[index];
                e.removeEventListener("click", openModal);
            }
        };
    });
}
