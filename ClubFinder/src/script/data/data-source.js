import clubs from "./clubs.js";

class DataSource {
    static searchClub(keyword) {
        return fetch(
            `https://sports-api.dicoding.dev/teams/search?t=${keyword}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                if (responseJSON.teams) {
                    return Promise.resolve(responseJSON.teams);
                } else {
                    return Promise.reject(`${keyword}Not found`);
                }
            });
    }
}

export default DataSource;
