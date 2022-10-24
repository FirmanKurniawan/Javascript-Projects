export default function fetchData({
    url,
    method = "GET",
    host = process.env.REACT_APP_API_HOST,
}) {
    return fetch(`${host}${url}`, {
        method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error("unable to fetch data");
            return res.json();
        })
        .then((data) => data);
}
