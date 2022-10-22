export function addClass(e, classes) {
    e.classList && e.classList.add(...classes.split(" "));
}

export function removeClass(e, classes) {
    e.classList && e.classList.remove(...classes.split(" "));
}
